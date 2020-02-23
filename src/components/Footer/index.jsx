import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Social from './Social';
import Copy from './Copy';

export default class Footer extends Component {
    render() {
        console.log("PROPS:", this.props.children);
        return (
            <>
                <ProductWrapper>
                    <Main>
                        <Title>phone store</Title>
                    </Main>
                    <Nav className="d-block d-sm-block d-md-flex d-lg-flex">
                        <Item>
                            <Link to="/">
                                <ItemText>Products</ItemText>
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/categories">
                                <ItemText>Categories</ItemText>
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/about">
                                <ItemText>About us</ItemText>
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/contact">
                                <ItemText>Contact us</ItemText>
                            </Link>
                        </Item>

                        {/* sta staviti ovde */}
                        <Item>
                            <Link to="/about">
                                <ItemText>About us</ItemText>
                            </Link>
                        </Item>
                    </Nav>
                    <Social />
                    <Copy />
                </ProductWrapper>
            </>
        )
    }
}



const ProductWrapper = styled.section`
    width:100%;
    height:auto;
    background: var(--mainBlue);
                bottom:0;                          
                left:0; 
    #bottom {
                position:absolute;                  
                bottom:0;                          
                left:0; 
    }
`

const Main = styled.div`
    width:100%;
    height:auto;
`

const Title = styled.h1`
    text-transform:capitalize;
    text-align:center;
    color: var(--mainYellow);
`

const Nav = styled.div`
    width:100%;
    height:auto;
    display:flex;
    padding: 0.5rem 0rem;
`

const Item = styled.div`
    width:30%;
    height:auto;
    margin:auto;
    cursor:pointer;
    &:hover {
        color:green;
    }
`

const ItemText = styled.h4`
    text-transform:capitalize;
    text-align:center;
    color: var(--mainYellow)!important;
    padding: 0.3rem 0;
    &:hover {
        background: var(--lightBlue);
        border-radius: 20px;
    }
`