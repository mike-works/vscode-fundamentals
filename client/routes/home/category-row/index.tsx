import './styles.scss';

import * as React from 'react';
import GroceryItemUI from '../../../components/grocery-item';
import GroceryItemStore from 'client/data/grocery-item-store';
import CartStore from 'client/data/cart-store';

interface ICategoryRowProps {
  groceryItemStore: GroceryItemStore;
  cartStore: CartStore;
  categoryName: string;
  className: string;
}

interface ICategoryRowState {
  groceryItems: IGroceryItem[];
}

class CategoryRow extends React.Component<ICategoryRowProps, ICategoryRowState> {
  private itemUpdateListener: () => void;
  constructor(opts) {
    super(opts);
    this.state = {
      groceryItems: []
    };
  }
  _updateGroceryItems() {
    this.props.groceryItemStore
      .itemsForCategory(this.props.categoryName)
      .then((groceryItems: IGroceryItem[]) => {
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
      <GroceryItemUI
        cartStore={this.props.cartStore}
        key={item.id}
        item={item}/>
    ));
    return (
      <li className='CategoryRow'>
        <h2 className='category-name'>{this.props.categoryName}</h2>
        <ul className='grocery-item-list'>
          {itemComponents}
          {/* 👇 code for exercise 1 here 👇 */}




        </ul>
      </li>
    );
  }
}

export default CategoryRow;