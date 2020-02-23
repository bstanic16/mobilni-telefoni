import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../../context';
import { storeProducts } from '../../../data';
import Product from '../../Product';
import { ButtonContainer } from '../../Button';

export default class CategoryItem extends Component {
    state = {
        products: storeProducts,
        min: 0,
        max: 0,
        clicked: false
    }

    ascendingSort = () => {
        let mapp = this.state.products.sort((a, b) => Number(a.price) > Number(b.price));
        console.log("Descending:", mapp);
        this.setState({
            products: mapp,
            clicked: false
        })
        // const niz = []
        // this.state.products.map(item => {
        //     if (item.category === this.props.name) {
        //         niz.push(item)
        //     }
        // })
        // console.log("NIZ", niz);
        // let arrASC = niz.sort((a, b) => Number(a.price) > Number(b.price))
        // console.log("NIZIZIZIZ", arrASC)
        // this.setState({
        //     products: arrASC,
        //     clicked: false
        // })
    }

    descendingSort = () => {
        let mapp = this.state.products.sort((a, b) => Number(b.price) > Number(a.price));
        console.log("Descending:", mapp);
        this.setState({
            products: mapp,
            clicked: false
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
        return (
            <>
                <ProductWrapper className="">
                    <div className="row justify-content-center p-2">
                        <Price>Cena: </Price>
                        <Input type="text" placeholder="Od" onChange={this.minHanlder} />
                        <Input type="text" placeholder="Do" onChange={this.maxHanlder} />
                        <ButtonContainer onClick={this.clickedHandler}>SEARCH</ButtonContainer>
                    </div>
                    <div className="row justify-content-center p-2">
                        <ButtonContainer onClick={this.ascendingSort}>Sortiraj po ceni rastuce</ButtonContainer>
                        <ButtonContainer onClick={this.descendingSort}>Sortrtiraj po ceni opadajuce</ButtonContainer>
                    </div>
                    <div className="row justify-content-center">
                        <ProductConsumer>
                            {(value) => {
                                return this.state.products.map(product => {
                                    console.log("CLICKED:", this.state.clicked);
                                    console.log("od", this.state.min);
                                    console.log("od", this.state.max);
                                    if (product.category === this.props.name && (this.state.clicked === true && (this.state.min <= product.price && this.state.max >= product.price))) {
                                        return (
                                            <>
                                                <Product key={product.id} product={product} />
                                            </>
                                        )
                                    } else if (this.state.clicked === false && product.category === this.props.name) {
                                        return (
                                            <>
                                                <Product key={product.id} product={product} />
                                            </>
                                        )
                                    }
                                })
                            }}
                        </ProductConsumer>
                    </div>
                </ProductWrapper>
            </>
        )
    }
}

const ProductWrapper = styled.section`
    width:100%;
`
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