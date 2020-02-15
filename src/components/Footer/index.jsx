import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from '../Button';
import Social from './Social';

export default class Footer extends Component {
    render() {
        return (
            <>
                <ProductWrapper className="py-5">
                    <Main>
                        <Link to="/">
                            <Intro>Phone store</Intro>
                        </Link>
                    </Main>
                    <MainSec>
                        <Left>
                            <Title>About us</Title>
                            <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque porro placeat nesciunt praesentium? Incidunt nostrum temporibus deleniti eligendi, esse totam rerum, exercitationem blanditiis rem tenetur explicabo aliquam tempora recusandae maiores.</Description>
                        </Left>
                        <Right>
                            <Title>Contact us</Title>
                            <Description>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum voluptas minus quibusdam, fugit laborum quam vero necessitatibus voluptatem iure cum ducimus aliquid, illo perferendis ea asperiores laudantium laboriosam autem assumenda.
                            </Description>
                            <Button>
                                <Link to="/contact">
                                    <ButtonContainer cart>Contact us</ButtonContainer>
                                </Link>
                            </Button>
                        </Right>
                    </MainSec>
                    <Social />
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
    padding-bottom: 1.5rem;
`

const Intro = styled.h3`
    width:100%;
    height:auto;
    color: var(--mainYellow);
    text-align:center;
    margin:0;
    padding:1.5rem 0rem;
    line-height: 0;
    cursor:pointer;
`

const MainSec = styled.div`
    width:100%;
    height:auto;
    display:flex;
`

const Left = styled.div`
    width:50%;
    height:auto;
    background: var(--lightBlue);
    border: 2px solid black;
    border-radius: 30px;
    display: inline-block;
`

const Right = styled.div`
    width:50%;
    height:auto;
    background: var(--lightBlue);
    border: 2px solid black;
    border-radius: 30px;
`
const Title = styled.h1`
    text-align:center;
    color: var(--mainBlue);
    padding: 2rem 0rem;
`

const Description = styled.p`
    width: 60%;
    height:auto;
    margin:auto;
    text-align: center;
`

const Button = styled.div`
    width: 20%;
    height:auto;
    margin: auto;
    padding: 2rem 0;
`