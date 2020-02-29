import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../../context';
import { storeProducts } from '../../../data';
import Product from '../../Product';
import { ButtonContainer } from '../../Button';
import Pagination from 'jw-react-pagination';
import ButtonUp from '../../ButtonUp';

export default class CategoryItem extends Component {
    constructor() {
        super()

        let exampleItems = [...storeProducts];
        this.state = {
            products: storeProducts,
            min: 0,
            max: 0,
            clicked: false,
            exampleItems: exampleItems,
            pageOfItems: [],
            productName: '',
            productClicked: false
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    onProductNameChange = (event) => {
        this.setState({ productName: event.target.value })
    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems })
    }


    ascendingSort = () => {
        let mapp = this.state.exampleItems.sort((a, b) => Number(a.price) > Number(b.price));
        this.setState({
            pageOfItems: mapp,
            exampleItems: mapp,
            products: mapp,
            clicked: false,
            productClicked: false,
            min: 0,
            max: 0
        })
    }

    descendingSort = () => {
        let mapp = this.state.exampleItems.sort((a, b) => Number(b.price) > Number(a.price));
        this.setState({
            pageOfItems: mapp,
            products: mapp,
            exampleItems: mapp,
            clicked: false,
            productClicked: false,
            min: 0,
            max: 0
        })
    }

    minHanlder = (e) => {
        this.setState({
            min: e.target.value,
            clicked: false,
            productClicked: false
        })
    }
    maxHanlder = (e) => {
        this.setState({
            max: e.target.value,
            clicked: false,
            productClicked: false
        })
    }

    clickedHandler = () => {
        console.log("Clicked: ", this.state.clicked)
        this.setState({
            clicked: !this.state.clicked,
            productClicked: false
        })
    }

    clickedProductHandler = () => {
        console.log("handler: ", this.state.productName)
        this.setState({
            productClicked: !this.state.productClicked,
        })
    }

    render() {
        return (
            <>
                <ProductWrapper className="">
                    <div className="row justify-content-center p-2">
                        <Mains>
                            <Price>Cena: </Price>
                            <Input type="text" placeholder="Od" onChange={this.minHanlder} />
                            <Input type="text" placeholder="Do" onChange={this.maxHanlder} />
                            <Button>
                                <ButtonContainer onClick={this.clickedHandler}>SEARCH</ButtonContainer>
                            </Button>
                        </Mains>
                    </div>
                    <div className="row justify-content-center p-2">
                        <Input type="text" placeholder="Naziv proizvoda" onChange={this.onProductNameChange} />
                        <Button>
                            <ButtonContainer onClick={this.clickedProductHandler}>SEARCH</ButtonContainer>
                        </Button>
                    </div>
                    <div className="row justify-content-center p-2">
                        <ButtonContainer onClick={this.ascendingSort}>Sortiraj po ceni rastuce</ButtonContainer>
                        <ButtonContainer onClick={this.descendingSort}>Sortrtiraj po ceni opadajuce</ButtonContainer>
                    </div>
                    <div className="row justify-content-center">
                        <ProductConsumer>
                            {(value) => {
                                return this.state.pageOfItems.map(product => {
                                    let pName = this.state.productName.toLowerCase()
                                    let str = product.title.toLowerCase()
                                    if ((this.state.productClicked === false && product.category === this.props.name && this.state.clicked === true) && (this.state.min <= product.price && this.state.max >= product.price)) {
                                        return (
                                            <>
                                                <Product key={product.id} product={product} />
                                            </>
                                        )
                                    } else if ((this.state.clicked === false && this.state.productClicked === true) && str.includes(pName)) {
                                        return (
                                            <>
                                                <Product key={product.id} product={product} />
                                            </>
                                        )
                                    } else if ((this.state.clicked === false && this.state.productClicked === false) && product.category === this.props.name) {
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
                    <Pages>
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                    </Pages>
                    <ButtonUp></ButtonUp>
                </ProductWrapper>
            </>
        )
    }
}

const Mains = styled.form`
    width:90%;
    margin:auto;
    text-align:center;
    display:flex;
    justify-content:center;
    @media(max-width: 320px) {
        display:block;
        text-align:center;
        .input{
            text-align:center;
        }
    }

    @media(max-width: 768px) {
        display:block;
        text-align:center;
        .input{
            text-align:center;
        }
    }

    @media(max-width: 568px) {
        display:block;
        text-align:center;
        .input{
            text-align:center;
        }
    }
`

const Pages = styled.div`
    width: 100%;
    text-align:center;
`

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
    text-align:center;
`

const Button = styled.div`
    text-align:center;
`