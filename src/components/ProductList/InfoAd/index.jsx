import React from 'react';
import styled from 'styled-components';
import { ButtonContainer } from '../../Button';
import { Link } from 'react-router-dom';
import Telephone from '../../svgs/telephone.png';
import Email from '../../svgs/email.png';
import Info from '../../svgs/info.png';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';

const ProductWrapper = styled.div`
    width:100%;
    margin:auto;
    height:400px;
    display:flex;
    background:var(--mainBlue);
    @media(max-width: 768px) {
        display:block;
        height:auto;
        padding-bottom: 1rem;
    }
    @media(max-width: 568px) {
    }
`

const Main = styled.div`
    width:50%;
    height:auto;
    /* border: 1px solid black; */
    @media(max-width: 768px) {
        width:50%;
        margin:auto;
    }
    @media(max-width: 568px) {
        width:80%;
        margin:auto;
    }

    @media(max-width: 320px) {
        width:90%;
        margin:auto;
    }
`

const Title = styled.h4`
    width:20%;
    margin:auto;
    text-align:center;
    color:var(--mainYellow);
    padding: 1rem 0rem;
    border-bottom: 2px solid var(--mainYellow);
    border-radius:50px;
    @media(max-width: 768px) {
        width:40%;
        height:auto;
        padding-bottom: 1rem;
    }
    @media(max-width: 320px) {
        width:80%;
        margin:auto;
    }
`

const Box = styled.div`
    width:70%;
    height:250px;
    margin:auto;
    border: 1px solid var(--lightBlue);
    border-radius:50px;
    text-align:center;
    padding: 1rem 0rem;
    @media(max-width: 768px) {
        width:95%;
        margin:auto;
        height:auto;
        padding-bottom: 1rem;
        background:Green;
    }

    @media(max-width: 568px) {
        width: 98%;
    }
    

`

const Par = styled.p`
    padding:1rem 0rem;
    color:var(--lightBlue);
    font-size:1.5rem;
`

const BoxMin = styled.div`
    width:50%;
    margin:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center!important;
    @media(max-width: 768px) {
        width:80%;
    }
    @media(max-width: 568px) {
        width:90%;
    }
`

const Img = styled.img`
    width:30px;
    height:30px;
`

const P = styled.p`
    padding-top:0.7rem;
    text-align: left!important;
    color:var(--mainWhite);
    letter-spacing: 0.1rem;
    @media(max-width: 768px) {
        font-size:1rem;
    }
`

const Box1 = styled.div`
    width:30%;
    @media(max-width: 768px) {
        width:50%;
        margin:auto;
    }
    @media(max-width: 568px) {
        width:10%;
    }
`

const Box2 = styled.div`
    width:70%;
    align-items:center;
`

const H4 = styled.h4`
    padding: 0.5rem 0rem;
    color:var(--lightBlue);
`

const Pad = styled.div`
    padding:1rem 0rem;
    
`

export default function InfoAd() {
    return (
        <ProductWrapper>
            <Main>
                <Rotate top left>
                    <Pad>
                        <Title>Informacije</Title>
                    </Pad>
                </Rotate>
                <Slide left>
                    <Box>
                        <Img src={Info}></Img>
                        <Par>Informisite se na vreme o svemu</Par>
                        <Link to="/informacije">
                            <ButtonContainer>saznaj vise</ButtonContainer>
                        </Link>
                    </Box>
                </Slide>
            </Main>
            <Main>
                <Rotate top right>
                    <Pad>
                        <Title>Kontakt</Title>
                    </Pad>
                </Rotate>
                <Slide right>
                    <Box>
                        <H4>Kontaktirajte nas </H4>
                        <BoxMin>
                            <Box1>
                                <Img src={Telephone}></Img>
                            </Box1>
                            <Box2>
                                <P>0622232392</P>
                            </Box2>
                        </BoxMin>
                        <BoxMin>
                            <Box1>
                                <Img src={Email}></Img>
                            </Box1>
                            <Box2>
                                <P>email1email@gmail.com</P>
                            </Box2>
                        </BoxMin>
                        <Link to="/contact">
                            <ButtonContainer>saznaj vise</ButtonContainer>
                        </Link>
                    </Box>
                </Slide>
            </Main>
        </ProductWrapper>
    )
}
