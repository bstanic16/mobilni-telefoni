import React, { Component } from 'react';
import Title from '../Title';
import styled from 'styled-components';
import { ProductConsumer } from '../../context';
import { storeProducts } from '../../data';
import Product from '../Product';
import CategoryItem from './CategoryItem';
import { ButtonContainer } from '../Button';
// import Pagination from 'jw-react-pagination';
import Pagination from '../Pagination';
import ButtonUp from '../ButtonUp';

export default class Categories extends Component {
    constructor() {
        super()

        let exampleItems = [...storeProducts];
        this.state = {
            products: storeProducts,
            maske: false,
            folije: false,
            punjaci: false,
            slusalice: false,
            drzaci: false,
            powerBank: false,
            memorija: false,
            tastatura: false,
            mis: false,
            min: 0,
            max: 0,
            clicked: false,
            exampleItems: exampleItems,
            pageOfItems: []
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        window.scrollTo(0, 0);
        this.setState({ pageOfItems: pageOfItems })
    }

    misHandler = () => {
        this.setState({
            folije: false,
            punjaci: false,
            slusalice: false,
            drzaci: false,
            maske: false,
            powerBank: false,
            memorija: false,
            tastatura: false,
            mis: !this.state.mis
        })
    }

    tastaturaHandler = () => {
        this.setState({
            folije: false,
            punjaci: false,
            slusalice: false,
            drzaci: false,
            maske: false,
            powerBank: false,
            memorija: false,
            mis: false,
            tastatura: !this.state.tastatura
        })
    }

    memorijaHandler = () => {
        this.setState({
            folije: false,
            punjaci: false,
            slusalice: false,
            drzaci: false,
            maske: false,
            powerBank: false,
            tastatura: false,
            mis: false,
            memorija: !this.state.memorija
        })
    }

    powerBankHandler = () => {
        this.setState({
            folije: false,
            punjaci: false,
            slusalice: false,
            drzaci: false,
            maske: false,
            memorija: false,
            tastatura: false,
            mis: false,
            powerBank: !this.state.powerBank
        })
    }

    maskeHanlder = () => {
        this.setState({
            folije: false,
            punjaci: false,
            slusalice: false,
            drzaci: false,
            powerBank: false,
            memorija: false,
            tastatura: false,
            mis: false,
            maske: !this.state.maske
        })
    }
    folijeHandler = () => {
        this.setState({
            maske: false,
            punjaci: false,
            slusalice: false,
            drzaci: false,
            powerBank: false,
            memorija: false,
            tastatura: false,
            mis: false,
            folije: !this.state.folije
        })
    }
    punjaciHandler = () => {
        this.setState({
            maske: false,
            folije: false,
            slusalice: false,
            drzaci: false,
            powerBank: false,
            memorija: false,
            tastatura: false,
            mis: false,
            punjaci: !this.state.punjaci
        })
    }
    slusaliceHandler = () => {
        console.log("BOOts:", this.state.slusalice)
        this.setState({
            maske: false,
            folije: false,
            punjaci: false,
            drzaci: false,
            powerBank: false,
            memorija: false,
            tastatura: false,
            mis: false,
            slusalice: !this.state.slusalice
        })
    }
    drzaciHander = () => {
        this.setState({
            maske: false,
            folije: false,
            punjaci: false,
            slusalice: false,
            powerBank: false,
            memorija: false,
            tastatura: false,
            mis: false,
            drzaci: !this.state.drzaci
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
                <ProductWrapper className="py-3">
                    <div className="container">
                        <Title name="izaberi" title="kategoriju" />
                        <Drop className="row justify-content-center py-2">
                            <ButtonContainer onClick={this.maskeHanlder}>
                                {this.state.maske === true ? 'Zatvori maske' : 'Maske'}
                            </ButtonContainer>
                            <ButtonContainer onClick={this.folijeHandler}>Folije</ButtonContainer>
                            <ButtonContainer onClick={this.punjaciHandler}>Punjaci</ButtonContainer>
                            <ButtonContainer onClick={this.slusaliceHandler}>Slusalice</ButtonContainer>
                            <ButtonContainer onClick={this.drzaciHander}>Drzaci za mobilni</ButtonContainer>
                            <ButtonContainer onClick={this.powerBankHandler}>Power bank</ButtonContainer>
                            <ButtonContainer onClick={this.memorijaHandler}>Memorija</ButtonContainer>
                            <ButtonContainer onClick={this.tastaturaHandler}>Tastature</ButtonContainer>
                            <ButtonContainer onClick={this.misHandler}>Misevi</ButtonContainer>
                        </Drop>
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    console.log("KATEGORIJE:", this.state.products);
                                    console.log("PowerBank", this.state.powerBank)
                                    if (this.state.maske === true) {
                                        return (
                                            <CategoryItem name="maske" />
                                        )
                                    }

                                    if (this.state.powerBank === true) {
                                        return (
                                            <CategoryItem name="powerBank" />
                                        )
                                    }

                                    if (this.state.folije === true) {
                                        return (
                                            <CategoryItem name="folije" />
                                        )
                                    }
                                    if (this.state.punjaci === true) {
                                        return (
                                            <CategoryItem name="punjaci" />
                                        )
                                    }
                                    if (this.state.slusalice === true) {
                                        return (
                                            <CategoryItem name="slusalice" />
                                        )
                                    }
                                    if (this.state.drzaci === true) {
                                        return (
                                            <CategoryItem name="drzaci" />
                                        )
                                    }



                                    if (this.state.memorija === true) {
                                        return (
                                            <CategoryItem name="memorija" />
                                        )
                                    }

                                    if (this.state.tastatura === true) {
                                        return (
                                            <CategoryItem name="tastatura" />
                                        )
                                    }

                                    if (this.state.mis === true) {
                                        return (
                                            <CategoryItem name="mis" />
                                        )
                                    }
                                    return (
                                        <>
                                            {this.state.pageOfItems.map(product => {
                                                return <Product key={product.id} product={product} />
                                            })}
                                            {/* <Pages>
                                                <Pagination pageSize={24} initialPage={1} labels={customLabels} styles={customStyles} items={this.state.exampleItems} onChangePage={this.onChangePage} />
                                            </Pages> */}
                                        </>
                                    )
                                }}
                            </ProductConsumer>
                        </div>
                        <ButtonUp></ButtonUp>
                    </div>
                </ProductWrapper>
            </>
        )
    }
}
const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
}

const customStyles = {
    ul: {
        borderRadius: '50px',
        border: '0',
    },
    li: {
        border: '0',
        justifyContent: 'space-beetween'
    },
    a: {
        color: 'var(--mainDark)',
        fontWeight: 'bold',
        // backgroundColor: 'var(--lightBlue)',
        paddingRight: '1rem',
        paddingLeft: '1rem',
        border: '0'

    },
}

const Drop = styled.div`
    /* display:none;
    @media(max-width:568px) {
        display: flex;
        width:95;
        margin:auto;
    } */
`

const ProductWrapper = styled.section`
    overflow: hidden;
`

const Pages = styled.div`
    width: 100%;
    text-align:center;
`