import React, { useState, useRef, useEffect } from 'react';

function Product({ product, total, result, history }) {
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();

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
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    return actions.order.capture().then(function (details) {
                        setPaidFor(true);
                        alert('Transaction competed by' + details.payer.name.given_name);
                        history.push('/');
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
            <div ref={paypalRef} style={{ width: '20%' }} />
        </>
    );
}

function App({ value, history }) {
    console.log("PAYPAL", value.cart)
    console.log(value.cartTotal)
    const product = value.cart.map(item => {
        return {
            id: item.id,
            price: item.price,
            description: item.title,
            name: item.title
        }
    })
    console.log('PRODUCT:', product);

    return (
        <div className="App">
            {product.map(item => {
                var result = '';
                product.forEach(function (str) {
                    result += str.description + ', '
                })
                console.log("RESULT", result)
                if (product.length > 1) {
                    product.length = 1
                }
                if (product.length === 1) {
                    return (
                        <Product key={item.id} history={history} product={item} products={product} total={value.cartTotal} result={result} />
                    )
                }

            })}
        </div>
    );
}

export default App;