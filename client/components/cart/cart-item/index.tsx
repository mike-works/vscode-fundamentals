import * as React from 'react';
import { endpoint as API_ENDPOINT } from '../../../utils/api';

import './styles.scss';
import CartStore from 'client/data/cart-store';

function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}

function CartItem({cartItem, cartStore}: { cartItem: ICartItem, cartStore: CartStore}) {
  const itemImgUrl = `${API_ENDPOINT}.${cartItem.groceryItem.imageUrl}`;
  const totalPrice = cartItem.qty * cartItem.groceryItem.price;
  return (
    <tr className='sidedrawer-list__item cart-item'>
      <td className='cart-item__qty'>
        <button onClick={() => {
          cartStore.addItemToCart(cartItem.groceryItem);
        }} className='qty-up'>▲</button>
        <div className='amt'>{cartItem.qty}</div>
        <button onClick={() => {
          cartStore.removeItemFromCart(cartItem.groceryItem);
        }} className='qty-up'>▼</button>
      </td>
      <td className='cart-item__img'>
        <img src={itemImgUrl} alt={cartItem.groceryItem.name}/>
      </td>
      <td className='cart-item__description'>
        <div className='cart-item__name'>{cartItem.groceryItem.name}</div>
        <div className='cart-item__unit'>{formatPrice(cartItem.groceryItem.price)} / {cartItem.groceryItem.unit || 'each'}</div>
      </td>

      <td className='cart-item__price'>
        {formatPrice(totalPrice)}
      </td>
    </tr>
  );
}

export default CartItem;
