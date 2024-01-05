import React, { useEffect } from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, increase, decrease, calculateTotals } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import cartItems from '../cartItems';

;
function CartItem({ id, img, title, price, amount }) {
  const dispatch = useDispatch()
  return (
    <>
      <article className='cart-item'>
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">${price}</h4>
          <button className='remove-btn' onClick={() => {
            dispatch(removeItem(id))
          }}>remove</button>
        </div>

        <div>
          <button className='amount-btn' onClick={() => {
            dispatch(increase({ id }))
          }}>
            <ChevronUp />
          </button>
          <p className="amount">{amount}</p>
          <button className='amount-btn' onClick={() => {
            if (amount > 0) {
              dispatch(decrease({ id }))

            }

          }}>
            <ChevronDown />
          </button>
        </div>
      </article>
    </>
  )
}

export default CartItem