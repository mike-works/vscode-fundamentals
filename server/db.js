const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const dbModels = require('./models');
const debug = require('debug')('fegrocer:db');
const PROJECT_ROOT_PATH = path.join(__dirname, '..');

function dbPath(name) {
  return path.join(PROJECT_ROOT_PATH, 'db', `${name}.sqlite`);
}

async function openDb(name) {
  let databasePath = dbPath(name);

  return new Promise((resolve, reject) => {
    fs.exists(databasePath, (itExists) => {
      if (!itExists) {
        reject(`File not found: ${databasePath}`);
      }
      let sequelize = new Sequelize({
        dialect: 'sqlite',
        pool: {
          max: 5,
          min: 0,
          idle: 10000
        },
        logging: (x) => debug(x),
        storage: databasePath
      });
      resolve(sequelize);
    });
  });
}

async function ensureDevelopmentDbExists() {
  return new Promise((resolve, reject) => {
    fs.exists(dbPath('development'), (itExists) => {
      if (!itExists) {
        let stream = fs
          .createReadStream(dbPath('master'))
          .pipe(fs.createWriteStream(dbPath('development')));
        stream.on('finish', resolve);
        stream.on('error', reject);
      } else {
        resolve();
      }
    });
  });
}

class Db {
  constructor() {
    this._models = null;
  }
  async _connectToDatabase() {
    let conn;
    try {
      conn = await openDb('development');
    } catch (err) {
      process.stderr.write(chalk.red(' - Problem connecting to database\n', err));
      process.exit(1);
    }
    return conn.authenticate()
      .then(() => conn)
      .catch((err) => {
        process.stderr.write(chalk.red(' - Problem authenticating to database\n', err));
        process.exit(1);
      });
  }

  async transaction(cb) {
    return this.db.transaction(cb);
  }

  async start() {
    await ensureDevelopmentDbExists();
    this.db = await this._connectToDatabase();
    this.db.sync();
    // tslint:disable-next-line:no-unused-expression
    this.models;
  }

  get models() {
    if (!this.db) {
      throw new Error('DB has not been started yet');
    }
    if (this._models === null) {
      this._models = dbModels(this.db);
    }
    return this._models;
  }
}
const DB_INSTANCE = new Db();
Db.instance = DB_INSTANCE;

module.exports = Db;