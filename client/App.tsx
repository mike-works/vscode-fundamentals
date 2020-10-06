import * as React from 'react';

import './sass/content-wrapper.scss';

import Home from './routes/home/index';

import SideDrawer from './components/side-drawer/index';
import AppHeader from './components/app-header/index';
import AppFooter from './components/app-footer/index';
import Cart from './components/cart/index';
import Orders from './components/orders/index';

import * as Container from 'muicss/lib/react/container';

import CartStore from './data/cart-store';
import GroceryItemStore from './data/grocery-item-store';
import OrderStore from './data/order-store';

interface IAppState {
  drawerShowing: string | null;
  cartItems: any[];
  orders: any[];
}

class App extends React.Component<any, IAppState> {

  cartStore = new CartStore();
  groceryItemStore = new GroceryItemStore();
  orderStore = new OrderStore();

  homeRoute: React.SFC<any> = null;

  constructor(opts) {
    super(opts);

    this.cartStore.itemListeners.registerListener((newItems: any[]) => {
      this.setState({cartItems: newItems});
    });

    this.orderStore.orderListeners.registerListener((newItems: any[]) => {
      this.setState({orders: newItems});
    });

    this.state = {
      drawerShowing: null,
      cartItems: this.cartStore.items as any[],
      orders: this.orderStore.orders as any[]
    };
    this.toggleLeftDrawer = this.toggleLeftDrawer.bind(this);
    this.toggleRightDrawer = this.toggleRightDrawer.bind(this);
    this.closeAllDrawers = this.closeAllDrawers.bind(this);

    this.homeRoute = (prps) => (
      <Home
        cartStore={this.cartStore}
        groceryItemStore={this.groceryItemStore}
        {...prps} />
    );
  }

  toggleLeftDrawer() {
    const oldState = this.state.drawerShowing;
    this.setState({ drawerShowing: oldState === 'left' ? null : 'left' });
  }

  toggleRightDrawer() {
    const oldState = this.state.drawerShowing;
    this.setState({ drawerShowing: oldState === 'right' ? null : 'right' });
  }

  closeAllDrawers() {
    this.setState({ drawerShowing: null });
  }

  render() {
    const wrapperClassNames = ['frontend-grocer'];
    if (this.state.drawerShowing === 'left') wrapperClassNames.push('show-left-sidedrawer');
    if (this.state.drawerShowing === 'right') wrapperClassNames.push('show-right-sidedrawer');
    return (
        <div className={wrapperClassNames.join(' ')}>
          <SideDrawer side={'left'} drawerShowing={this.state.drawerShowing === 'left'}>
            <div className='brand mui--appbar-line-height'>
              <span className='mui--text-title'>📦 Orders</span>
            </div>
            <div className='mui-divider'></div>
            <Orders orders={this.state.orders}/>
          </SideDrawer>
          <SideDrawer side={'right'} drawerShowing={this.state.drawerShowing === 'right'}>
            <div className='brand mui--appbar-line-height'>
              <span className='mui--text-title'>🛒 Cart</span>
            </div>
            <div className='mui-divider'></div>
            <Cart cartStore={this.cartStore} orderStore={this.orderStore} cartItems={this.state.cartItems} />
          </SideDrawer>
          <AppHeader
            numItemsInCart={this.state.cartItems.length}
            doLeftToggle={this.toggleLeftDrawer} doRightToggle={this.toggleRightDrawer}></AppHeader>
          <div className='content-wrapper'>
            <div className='mui--appbar-height'></div>
            <Container fluid={true}>
              <Home groceryItemStore={this.groceryItemStore} cartStore={this.cartStore}/>
            </Container>
          </div>
          <AppFooter></AppFooter>
          {this.state.drawerShowing
            ? <div id='mui-overlay' onClick={this.closeAllDrawers}></div>
            : ''}
        </div>
    );
  }
}

export default App;
