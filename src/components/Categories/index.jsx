import React, { Component } from 'react';
import Title from '../Title';
import styled from 'styled-components';
import { ProductConsumer } from '../../context';
import { storeProducts } from '../../data';
import Product from '../Product';
import CategoryItem from './CategoryItem';
import { ButtonContainer } from '../Button';
import Pagination from '../Pagination';

export default class Categories extends Component {
    constructor() {
        super()

        let exampleItems = [...storeProducts];
        this.state = {
            products: storeProducts,
            knifes: false,
            bags: false,
            scope: false,
            boots: false,
            kevlar: false,
            min: 0,
            max: 0,
            clicked: false,
            exampleItems: exampleItems,
            pageOfItems: [],
        }
        this.onChangePage = this.onChangePage.bind(this);
    }
    maskeClicked = () => {
        this.setState({ maskeClicked: !this.state.maskeClicked })
    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems })
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
            clicked: !this.state.clicked,
        })
    }

    render() {
        console.log("od", this.state.min)
        console.log("do", this.state.max)
        return (
            <>
                <ProductWrapper className="py-3">
                    <div className="container">
                        <Title name="izaberi" title="kategoriju" />
                        <div className="row justify-content-center py-2">
                            <ButtonContainer onClick={this.knifesHanlder}>Maske</ButtonContainer>
                            <ButtonContainer onClick={this.bagsHandler}>Folije</ButtonContainer>
                            <ButtonContainer onClick={this.scopeHandler}>Punjaci</ButtonContainer>
                            <ButtonContainer onClick={this.bootsHandler}>Slusalice</ButtonContainer>
                            <ButtonContainer onClick={this.kevlarHander}>Drzaci za mobilni</ButtonContainer>
                        </div>
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    console.log("KATEGORIJE:", this.state.products);

                                    if (this.state.knifes === true) {
                                        return (
                                            <CategoryItem name="knifes" clicked={this.state.clicked} min={this.state.min} max={this.state.max} />
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
                                    return (
                                        <>
                                            {this.state.pageOfItems.map(product => {
                                                if (this.state.clicked === true && (this.state.min <= product.price && this.state.max >= product.price)) {
                                                    return (
                                                        <>
                                                            <Product key={product.id} product={product} />
                                                        </>
                                                    )
                                                }
                                                if (this.state.clicked === false) {
                                                    return <Product key={product.id} product={product} />
                                                }
                                            })}
                                            <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                                        </>
                                    )
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