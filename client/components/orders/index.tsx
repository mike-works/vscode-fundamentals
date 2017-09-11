import * as React from 'react';

import './styles.scss';

function Orders({ orders }: { orders: Array<{id: string, totalPrice: number, name: string, status: string}> }) {
  const orderItems = orders.map((o) => {
    return (
      <li key={o.id} className='orders-list-item sidedrawer-list__item'>
        <p>{o.name}</p>
        <p>
          <span className='mui--pull-right'>
            <span className='badge'>
              {o.status}
            </span>
          </span>
          <b className='price'>${o.totalPrice} </b>
        </p>
      </li>
    );
  });
  return (
    <ul className='sidedrawer-list orders-list'>
      {orderItems.length > 0
        ? orderItems
        : <li className='sidedrawer-list__item'>No Orders</li>}
    </ul>
  );
}

export default Orders;
