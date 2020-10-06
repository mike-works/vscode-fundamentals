import './styles.scss';

import * as React from 'react';
import CategoryRow from './category-row';
import GroceryItemStore from 'client/data/grocery-item-store';
import CartStore from 'client/data/cart-store';

interface IHomeProps {
  groceryItemStore: GroceryItemStore;
  cartStore: CartStore;
}
interface IHomeState {
  categories: ArrayLike<any>;
}

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(opts) {
    super(opts);
    this.state = { categories: this.props.groceryItemStore.categories };
  }
  componentDidMount() {
    this.props.groceryItemStore.categoryListeners.registerListener((newCategories) => {
      this.setState({categories: newCategories});
    });
    this.props.groceryItemStore.updateCategories();
  }

  render() {
    const categoryRows = (this.state.categories as any[]).map((c) => (
      <CategoryRow
        className='category-list__item'
        key={c}
        cartStore={this.props.cartStore}
        groceryItemStore={this.props.groceryItemStore}
        categoryName={c} />
    ));
    return (
      <div className='Home'>
        <ul className='category-list'>
          {categoryRows}
        </ul>
      </div>
    );
  }
}

export default Home;
