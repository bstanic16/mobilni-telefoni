import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { ProductConsumer } from '../../context';
import Zoom from 'react-reveal/Zoom';

const ProductWrapper = styled.div`
        perspective: 1300px;
        /* -webkit-perspective: 1300px;
	    perspective: 1300px; */
    .card {
        /* -webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-transform-origin: 50% 50% -300px;
	transform-origin: 50% 50% -300px;
	-webkit-transform: rotateX(-180deg);
	transform: rotateX(-180deg);
	-webkit-animation: fly .8s ease-in-out forwards;
    animation: fly .8s ease-in-out forwards;
    @-webkit-keyframes fly {
	0% { }
	100% { -webkit-transform: rotateX(0deg); opacity: 1; }
}

@keyframes fly {
	0% { }
	100% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); opacity: 1; }
} */
        /* transform-style: preserve-3d;
        transform: translateZ(400px) translateY(300px) rotateX(-90deg);
        animation: fallPerspective 1.2s ease-in-out forwards;
        @keyframes fallPerspective {
	        100% { transform: translateZ(0px) translateY(0px) rotateX(0deg); opacity: 1 };
        } */
        border-radius: 30px;
        border:0;
    }

    
    
    .card-footer {
        border-top: transparent;
        transition: all 0.3s linear;
        border-radius: 0 0 30px 30px;
    }
    &:hover {
        .card {
            /* border: 0.04rem solid rgba(0,0,0,0.2); */
            box-shadow: 3px 3px 6px 0px rgba(0,0,0.5,0.5);
            color: var(--mainBlue)!important;
            transform: scale(1.1)!important;
            transition: all 1.9s linear!important;
        }
        .card-footer {
            border-radius: 0 0 30px 30px;
            background: var(--lightBlue);
        }
    }
    .img-container {
        position:relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: all 0.3s linear;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.1);
        transition: all 0.1s linear;
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right:0;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue);
        border: none;
        color: var(--mainYellow);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
    }
    .img-container:hover .cart-btn {
        transform: translate(0,0);
        transition: all 0.3s linear;
    }
    .cart-btn:hover {
        color:var(--mainBlue);
        cursor:pointer;
    }
`



export default class Product extends Component {

    render() {

        const { id, title, img, price, inCart } = this.props.product
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <Zoom bottom >
                    <div className="card">
                        <ProductConsumer>
                            {(value) => (
                                <div className="img-container p-5" onClick={() => {
                                    value.handleDetail(id);
                                }}>
                                    {/* <Link to="details"> */}
                                    <Link to={`/details/${id}`}>
                                        <img src={img} alt="alt" className="card-img-top" />
                                    </Link>
                                    <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }} >
                                        {inCart ? (<p className="text-capitalize mb-0" disabled>{" "} in cart</p>) : (<i className="fas fa-cart-plus" />)}
                                    </button>
                                </div>
                            )}
                        </ProductConsumer>
                        {/* cart footer */}
                        <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0">
                                {title}
                            </p>
                            <h5 className="font-italic mb-0 price-blue">
                                {price}
                                <span className="ml-1">RSD</span>
                            </h5>
                        </div>
                    </div>
                </Zoom>
            </ProductWrapper>
        )
    }
}


Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}