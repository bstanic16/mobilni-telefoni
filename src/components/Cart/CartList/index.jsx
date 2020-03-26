import React from 'react';
import CartItem from '../CartItem';

export default function CartList({ value, arr }) {
    // const { cart } = value;
    return (
        <div className="container-fluid">
            {arr.map(item => {
                return <CartItem key={item.id} item={item} value={value} />
            })}
        </div>
    )
}
