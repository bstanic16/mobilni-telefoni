import React from 'react';
import Print from '../../svgs/print.jpg';
import { ButtonContainer } from '../../Button';
import styled from 'styled-components';
import Product from '../../svgs/primer.png';
import { Link } from 'react-router-dom';
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';

const Main = styled.div`
    width:100%;
    margin:auto;
    height:400px;
    background-image: url(${Print});
    background-attachment: fixed;
    background-position: center;
    background-size:cover;
    background-repeat: no-repeat;
    display:flex;
    @media(max-width: 768px) {
        width: 100%;
    }
    @media(max-width: 568px) {
        display: block;
        height:auto;
        padding-bottom:1rem!important;
    }
`

const Block = styled.div`
    width:25%;
    height:auto;
    margin:auto;
    img {
        width:100%;
        height:350px;
        margin:auto;
    }
    @media(max-width: 768px) {
        width: 40%;
        margin:auto;
    }
    @media(max-width: 568px) {
        width: 65%;
        margin:auto;
    }
    @media(max-width: 320px) {
        width:80%;
        margin:auto;
    }
`
const Block1 = styled.div`
    width:40%;
    text-align:center;
    height:auto;
    margin:auto;
    border:2px solid var(--lightBlue);
    background:var(--mainBlue);
    padding: 1rem 0rem;
    border-radius:30px;
    @media(max-width: 768px) {
        width: 50%;
        margin:auto;
    }

    @media(max-width: 568px) {
        width:70%;
        margin:auto;
    }

    @media(max-width: 320px) {
        width:80%;
        margin:auto;
    }
    
`

const Title = styled.h4`
    width:50%;
    margin:auto;
    color:var(--mainWhite);
    padding: 1rem 0rem;
    @media(max-width: 768px) {
        width: 70%;
        margin:auto;
    }
`

export default function PrintAd() {
    return (
        <Main>
            <Block>
                <Bounce>
                    <img src={Product} alt="product" />
                </Bounce>
            </Block>
            <Block1>
                <Roll>
                    <Title>Obradujte nekog,<br /> narucite masku po zelji kod nas</Title>
                    <Link to="/print">
                        <ButtonContainer cart>Saznaj vise</ButtonContainer>
                    </Link>
                </Roll>
            </Block1>
        </Main>
    )
}
