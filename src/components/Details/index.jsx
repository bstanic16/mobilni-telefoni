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
        display:flex;
    }
`
const TwoImage = styled.div`
    width:25%;
    height: auto;
    padding: 1rem 1rem;
    border: 1px solid gray;
    img {
        width:100%;
    }
    img:hover {
        cursor: zoom-in;
        transform: scale(1.3);
        transition: all ease-in-out 0.5s;
    }
    @media(max-width: 768px) {
        width: 100%;
    }
`
export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            product: '',
            exist: false
        }
        this.back = this.back.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.image !== prevState.image) {
            this.imageChange(this.state.image)
        }
    }

    imageChange = (img) => {
        console.log("IMG", img);
        this.setState({
            image: img
        })
    }

    back = () => {
        window.history.back()
        // this.props.history.goBack();
        console.log("finish");
    }

    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    //vrti ceo niz i ispisuje u prvom if onaj proizvod koji odgovara ID-u
                    value.products.map(item => {
                        if (this.props.match.params.id == item.id) {
                            console.log("PROPS:", this.props.match.params.id);
                            console.log("id", item);
                            console.log("RADI");
                            this.state.product = item;
                            this.state.exist = false;
                            //ispituje da li je proosledjeni ID iz urla veci od duzine niza... ne postoji proizvod
                        } else if (this.props.match.params.id > value.products.length) {
                            this.state.exist = true;
                        }
                    })
                    console.log("Test", this.state.product);
                    console.log("Test slika", this.state.product.img);
                    console.log("IMAGE", this.state.image)

                    return (
                        <div className="container py-5">
                            {this.state.exist ? this.props.history.push("/categories") : null}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5 titleb">
                                    <h1>{this.state.product.title}</h1>
                                </div>
                            </div>
                            {/* product info */}
                            <div className="row">
                                {/* <img src="../img/BAT1773_01.jpg" alt="helo" /> */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={this.state.image ? "../" + this.state.image : "../" + this.state.product.img} className="img-fluid" alt="zez" width="400px" />
                                    <Main>
                                        <TwoImage onClick={() => this.imageChange(this.state.product.img)} >
                                            <img src={"../" + this.state.product.img} className="img-fluid" alt="img" />
                                        </TwoImage>
                                        <TwoImage onClick={() => this.imageChange(this.state.product.img2)} >
                                            <img src={"../" + this.state.product.img2} className="img-fluid" alt="img" />
                                        </TwoImage>
                                        <TwoImage onClick={() => this.imageChange(this.state.product.img3)}>
                                            <img src={"../" + this.state.product.img3} className="img-fluid" alt="img" />
                                        </TwoImage>
                                    </Main>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize titleb">
                                    <h2>model: {this.state.product.title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">{this.state.product.company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>price: {this.state.product.price}<span> RSD</span></strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product:
                                    </p>
                                    <p className="text-muted lead">
                                        {this.state.product.info}
                                    </p>
                                    <div >
                                        {/* <Link to="/categories"> */}
                                        <ButtonContainer onClick={this.back}>
                                            back to products
                                            </ButtonContainer>
                                        {/* </Link> */}
                                        <ButtonContainer
                                            cart
                                            disabled={this.state.product.inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(this.state.product.id);
                                                value.openModal(this.state.product.id);
                                            }}
                                        >
                                            {this.state.product.inCart ? 'inCart' : 'add to cart'}
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
