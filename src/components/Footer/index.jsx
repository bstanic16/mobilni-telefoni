import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from '../Button';
import Social from './Social';
import Copy from './Copy';

export default class Footer extends Component {
    render() {
        return (
            <>
                <ProductWrapper>
                    <Main>
                        <Title>welcome to phone store</Title>
                    </Main>
                    <Nav className="d-block d-sm-block d-md-inline-block d-lg-flex">
                        <Item>
                            <Link to="/contact">
                                <ItemText>Contact us</ItemText>
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/about">
                                <ItemText>About us</ItemText>
                            </Link>
                        </Item>
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
    background:purple;
    display:flex;
    padding: 0.5rem 0rem;
`

const Item = styled.div`
    width:30%;
    height:auto;
    margin:auto;
    cursor:pointer;
    color: var(--mainYellow)!important;
    &:hover {
        color:green;
    }
`

const ItemText = styled.h4`
    text-transform:capitalize;
    text-align:center;
`