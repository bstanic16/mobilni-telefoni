import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from '../PayPalButton';
import { ButtonContainer } from '../../Button'
import Checkout from '../CheckoutForm';
import styled from 'styled-components';

class CartTotals extends Component {
    state = {
        ren: false
    }

    clickHandler = () => {
        this.setState({ ren: !this.state.ren })
    }

    render() {
        const { cartSubTotal, cartTax, cartTotal, clearCart, cart } = this.props.value;
        console.log("VAZNO:", this.props.value);
        console.log("Cart count:", cart.count);
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right text-totals">
                            <Link to="/">
                                <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button"
                                    onClick={() => clearCart()}>
                                    clear cart
                            </button>
                            </Link>
                            <h5>
                                <span className="text-title">
                                    subtotal:
                            </span>
                                <strong>$ {cartSubTotal}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">
                                    tax:
                            </span>
                                <strong>$ {cartTax}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">
                                    total:
                            </span>
                                <strong>$ {cartTotal}</strong>
                            </h5>
                        </div>

                    </div>
                    <Container>
                        <ButtonContainer cart onClick={this.clickHandler} >
                            {this.state.ren ? 'close order' : 'checkout order'}
                            {/* {this.state.ren ? <PayPalButton value={this.props.value} total={cartTotal} clearCart={clearCart} history={this.props.history} title={title} /> : null} */}
                        </ButtonContainer>
                        {this.state.ren ? <Checkout value={this.props.value} cartTotal={cartTotal} clicked={this.state.ren} /> : null}
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}
export default CartTotals

const Container = styled.div`
    width:80%;
    margin: auto;
    text-align:center;
    padding: 1.5rem 0rem;
`