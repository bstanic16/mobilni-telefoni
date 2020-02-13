import React, { useState, useRef, useEffect, Component } from 'react';
import styled from 'styled-components';

const Paypal = styled.div`
    width:100%;
    height:auto;
    padding-top: 20%;
    overflow:hidden;
    display: inline-block;
`

function Product({ product, total, result, history }) {
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();
    console.log("TOTAL:", total)
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: result,
                                amount: {
                                    currency_code: 'USD',
                                    value: total,
                                }
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    return actions.order.capture().then(function (details) {
                        setPaidFor(true);
                        alert('Transaction competed by' + details.payer.name.given_name);
                        this.props.history.push('/');
                        return fetch('/paypal-transaction-compelete', {
                            method: 'post',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify({
                                orderID: data.orderID
                            })
                        })
                    }
                    )
                },
                onError: err => {
                    setError(err);
                    console.error(err);
                },
            })
            .render(paypalRef.current);
    }, [result, total]);
    console.log("Gornji:", product)
    if (paidFor) {
        return (
            <div>
                <h1>Congrats, you just bought {result}!</h1>
            </div>
        );

    }
    return (
        <>
            <div>
                <div>
                    {error && <div>Uh oh, an error occurred! {error.message}</div>}
                </div>
            </div>
            <Paypal ref={paypalRef} />
        </>
    );
}

class App extends Component {

    render() {
        console.log("PAYPAL", this.props.value.cart)
        console.log("total2:", this.props.value.cartTotal)
        const product = this.props.value.cart.map(item => {
            return {
                id: item.id,
                price: item.price,
                description: item.title,
                name: item.title,
                count: item.count
            }
        })
        console.log('PRODUCT:', product);
        console.log("COUNT:", product.count)
        return (
            <div >
                {product.map(item => {
                    var result = '';
                    product.forEach(function (str) {
                        result += str.description + ' - (' + str.count + '),'
                    })
                    console.log("RESULT", result)
                    if (product.length > 0) {
                        product.length = 0
                    }
                    if (product.length === 0) {
                        console.log("DUZ", product.length)
                        return (
                            <Product key={item.id} history={this.props.history} product={item} total={this.props.value.cartTotal} products={product} result={result} />
                        )
                    }
                })}
            </div>
        )
    }
}

export default App