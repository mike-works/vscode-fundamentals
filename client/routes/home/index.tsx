import './styles.scss';

import * as React from 'react';
import CategoryRow from './category-row';

interface IHomeProps {
  groceryItemStore: any;
  cartStore: any;
}
interface IHomeState {
  categories: any[];
}

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props) {
    super(props);
    this.state = { categories: this.props.groceryItemStore.categories };
  }
  componentDidMount() {
    this.props.groceryItemStore.categoryListeners.register((newCategories) => {
      this.setState({categories: newCategories});
    });
    this.props.groceryItemStore.updateCategories();
  }

  render() {
    const categoryRows = this.state.categories.map((c) => (
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
