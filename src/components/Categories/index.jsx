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
        bags: false,
        scope: false,
        boots: false,
        kevlar: false
    }

    knifesHanlder = () => {
        this.setState({
            bags: false,
            scope: false,
            boots: false,
            kevlar: false,
            knifes: !this.state.knifes
        })
    }
    bagsHandler = () => {
        this.setState({
            knifes: false,
            scope: false,
            boots: false,
            kevlar: false,
            bags: !this.state.bags
        })
    }
    scopeHandler = () => {
        this.setState({
            knifes: false,
            bags: false,
            boots: false,
            kevlar: false,
            scope: !this.state.scope
        })
    }
    bootsHandler = () => {
        console.log("BOOts:", this.state.boots)
        this.setState({
            knifes: false,
            bags: false,
            scope: false,
            kevlar: false,
            boots: !this.state.boots
        })
    }
    kevlarHander = () => {
        this.setState({
            knifes: false,
            bags: false,
            scope: false,
            boots: false,
            kevlar: !this.state.kevlar
        })
    }

    render() {
        return (
            <>
                <ProductWrapper className="py-5">
                    <div className="container">
                        <Title name="select" title="category" />
                        <div className="row">
                            <ButtonContainer onClick={this.knifesHanlder}>Knifes</ButtonContainer>
                            <ButtonContainer onClick={this.bagsHandler}>Bags</ButtonContainer>
                            <ButtonContainer onClick={this.scopeHandler}>Scopes</ButtonContainer>
                            <ButtonContainer onClick={this.bootsHandler}>Boots</ButtonContainer>
                            <ButtonContainer onClick={this.kevlarHander}>Kevlar vest</ButtonContainer>
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
                                    if (this.state.scope === true) {
                                        return (
                                            <CategoryItem name="scope" />
                                        )
                                    }
                                    if (this.state.boots === true) {
                                        return (
                                            <CategoryItem name="boots" />
                                        )
                                    }
                                    if (this.state.kevlar === true) {
                                        return (
                                            <CategoryItem name="kevlar" />
                                        )
                                    }
                                    return value.products.map(product => {
                                        // console.log("PRODUCT CAT:", product)
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