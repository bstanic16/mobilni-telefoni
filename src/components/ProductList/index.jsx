import React, { Component } from 'react';
import Product from '../Product';
import Title from '../Title';
import { ProductConsumer } from '../../context';
import { storeProducts } from '../../data';
import styled from 'styled-components'

export default class ProductList extends Component {
    state = {
        products: storeProducts
    }
    render() {
        console.log(this.state.products)
        return (
            <React.Fragment>
                <ProductWrapper className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </ProductWrapper>
            </React.Fragment>
        )
    }
}

const ProductWrapper = styled.section``