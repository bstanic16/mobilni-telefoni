import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../../context';
import { storeProducts } from '../../../data';
import Product from '../../Product';

export default class CategoryItem extends Component {
    state = {
        products: storeProducts
    }
    render() {
        return (
            <>
                <ProductWrapper className="">
                    <div className="container">
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    console.log(this.state.products);
                                    return value.products.map(product => {
                                        console.log("PRODUCT CAT:", product)
                                        console.log(product.category)
                                        if (product.category === this.props.name)
                                            return (
                                                <>
                                                    <Product key={product.id} product={product} />
                                                </>
                                            )
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </ProductWrapper>
            </>
        )
    }
}

const ProductWrapper = styled.section``