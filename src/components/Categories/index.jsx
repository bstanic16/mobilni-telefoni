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
        kevlar: false,
        min: 0,
        max: 0,
        clicked: false
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

    minHanlder = (e) => {
        this.setState({
            min: e.target.value,
            clicked: false
        })
    }
    maxHanlder = (e) => {
        this.setState({
            max: e.target.value,
            clicked: false
        })
    }

    clickedHandler = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        console.log("od", this.state.min)
        console.log("do", this.state.max)
        console.log("CLICKED:", this.state.clicked)
        return (
            <>
                <ProductWrapper className="py-3">
                    <div className="container">
                        <Title name="select" title="category" />
                        <div className="row justify-content-center py-2">
                            <ButtonContainer onClick={this.knifesHanlder}>Knifes</ButtonContainer>
                            <ButtonContainer onClick={this.bagsHandler}>Bags</ButtonContainer>
                            <ButtonContainer onClick={this.scopeHandler}>Scopes</ButtonContainer>
                            <ButtonContainer onClick={this.bootsHandler}>Boots</ButtonContainer>
                            <ButtonContainer onClick={this.kevlarHander}>Kevlar vest</ButtonContainer>
                        </div>
                        <div className="row justify-content-center p-2">
                            <Price>Price: </Price>
                            <Input type="text" placeholder="Min" onChange={this.minHanlder} />
                            <Input type="text" placeholder="Max" onChange={this.maxHanlder} />
                            <ButtonContainer onClick={this.clickedHandler}>SEARCH</ButtonContainer>
                        </div>
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    console.log("KATEGORIJE:", this.state.products);
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
                                        if (this.state.clicked === true && (this.state.min <= product.price && this.state.max >= product.price)) {
                                            return <Product key={product.id} product={product} />
                                        }
                                        if (this.state.clicked === false) {
                                            return <Product key={product.id} product={product} />
                                        }
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

const Input = styled.input`
    text-transform:capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    border-color: ${p => p.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: ${p => p.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor:pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        background:${p => p.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        color: var(--mainBlue);
    }
    &:focus {
        outline:none;
    }
`

const Price = styled.h3`
    color: var(--lightBlue);
    padding: 0.2rem 0.5rem;
`