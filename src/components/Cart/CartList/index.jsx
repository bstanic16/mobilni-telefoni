import React from 'react';
import CartItem from '../CartItem';

export default function CartList({ value, arr }) {
    const { cart } = value;
    // let karta = cart
    // const arr = [];
    // const getUnique = (kartaa) => {
    //     for (var value of kartaa) {
    //         if (arr.indexOf(value) === -1) {
    //             arr.push(value);
    //         }
    //     }
    //     return arr;
    // }
    // console.log(arr);
    // getUnique(karta);
    // console.log("KARTa", arr)
    return (
        <div className="container-fluid">
            {arr.map(item => {
                return <CartItem key={item.id} item={item} value={value} />
            })}
        </div>
    )
}
