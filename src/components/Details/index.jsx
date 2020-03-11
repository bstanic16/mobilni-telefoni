import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import { ButtonContainer } from '../Button';
import styled from 'styled-components';

const Main = styled.div`
    width:100%;
    display:flex;
    height: auto;
    @media(max-width: 768px) {
        width: 100%;
        display:block;
    }
`
const TwoImage = styled.div`
    width:50%;
    height: auto;
    padding: 2rem 2rem;
    img:hover {
        cursor: zoom-in;
        transform: scale(1.4);
        transition: all ease-in-out 0.5s;
    }
    @media(max-width: 768px) {
        width: 100%;
    }
`

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.back = this.back.bind(this);
    }

    back = () => {
        this.props.history.goBack();
        console.log("finish");
    }
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5 titleb">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="img" width="400px" />
                                    <Main>
                                        <TwoImage>
                                            <img src={img} className="img-fluid" alt="img" />
                                        </TwoImage>
                                        <TwoImage>
                                            <img src={img} className="img-fluid" alt="img" />
                                        </TwoImage>
                                    </Main>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize titleb">
                                    <h2>model: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>price: {price}<span> RSD</span></strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    <div >
                                        {/* <Link to="/categories"> */}
                                        <ButtonContainer onClick={this.back}>
                                            back to products
                                            </ButtonContainer>
                                        {/* </Link> */}
                                        <ButtonContainer
                                            cart
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? 'inCart' : 'add to cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
