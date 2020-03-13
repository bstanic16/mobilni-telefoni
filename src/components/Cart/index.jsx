import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {

    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            let karta = cart
                            const arr = [];
                            const getUnique = (kartaa) => {
                                for (var value of kartaa) {
                                    if (arr.indexOf(value) === -1) {
                                        arr.push(value);
                                    }
                                }
                                return arr;
                            }
                            console.log(arr);
                            getUnique(karta);
                            console.log("KARTa", arr)
                            return (
                                <React.Fragment>
                                    <Title name="Vasa" title="Korpa" />
                                    <CartColumns />
                                    <CartList value={value} arr={arr} />
                                    <CartTotals value={value} history={this.props.history} title={this.props.title} arr={arr} />
                                </React.Fragment>
                            )
                        } else {
                            return (
                                <EmptyCart />
                            )
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
