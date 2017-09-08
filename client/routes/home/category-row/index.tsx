import './styles.scss';

import * as React from 'react';
import GroceryItem from '../../../components/grocery-item';

class CategoryRow extends React.Component<any, any> {
  private itemUpdateListener: () => void;
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: []
    };
  }
  _updateGroceryItems() {
    this.props.groceryItemStore.itemsForCategory(this.props.categoryName).then((groceryItems) => {
      this.setState({ groceryItems });
    });
  }
  componentDidMount() {
    this._updateGroceryItems();
    this.itemUpdateListener = () => {
      this._updateGroceryItems();
    };
    this.props.groceryItemStore.itemListeners.register(this.itemUpdateListener);
    this.props.groceryItemStore.updateItemsForCategory(this.props.categoryName, 10);
  }

  componentWillUnmount() {
    this.props.groceryItemStore.itemListeners.unregister(this.itemUpdateListener);
  }

  render() {
    const itemComponents = this.state.groceryItems.map((item) => (
      <GroceryItem
        cartStore={this.props.cartStore}
        key={item.id}
        item={item}/>
    ));
    return (
      <li className='CategoryRow'>
        <h2 className='category-name'>{this.props.categoryName}</h2>
        <ul className='grocery-item-list'>
          {itemComponents}
        </ul>
      </li>
    );
  }
}

export default CategoryRow;