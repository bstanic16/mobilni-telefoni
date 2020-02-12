import React, { Component } from 'react';
import Title from '../Title';
import styled from 'styled-components';
import { ProductConsumer } from '../../context';
import { storeProducts } from '../../data';
import Product from '../Product';
import CategoryItem from './CategoryItem';
import { ButtonContainer } from '../Button';


export default class Categories extends Component {
    state = {
        products: storeProducts,
        knifes: false,
        bags: false
    }

    knifesHanlder = () => {
        this.setState({ knifes: !this.state.knifes })
    }
    bagsHandler = () => {
        this.setState({ bags: !this.state.bags })
    }
    render() {
        console.log(this.state.knifes)
        return (
            <>
                <ProductWrapper className="py-5">
                    <div className="container">
                        <Title name="select" title="category" />
                        <div className="row">
                            <ButtonContainer onClick={this.knifesHanlder}>Knifes</ButtonContainer>
                            <ButtonContainer onClick={this.bagsHandler}>Bags</ButtonContainer>
                        </div>
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    console.log(this.state.products);
                                    if (this.state.knifes === true) {
                                        return (
                                            <CategoryItem name="knifes" />
                                        )
                                    }
                                    if (this.state.bags === true) {
                                        return (
                                            <CategoryItem name="bags" />
                                        )
                                    }
                                    return value.products.map(product => {
                                        console.log("PRODUCT CAT:", product)
                                        return <Product key={product.id} product={product} />
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