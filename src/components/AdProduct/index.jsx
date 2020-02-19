import React from 'react';
import styled from 'styled-components';
import { ButtonContainer } from '../Button';

export default function AdProduct({ product }) {
    console.log("PROD:", product)
    return (
        <>
            <Item>
                <Title>{product.title}</Title>
                <Body>
                    <Image>
                        <img src={product.img} alt="Product" />
                    </Image>
                    <MainText>
                        <Text>
                            {product.info}
                        </Text>
                        <Text2>
                            <ButtonContainer cart >add to cart</ButtonContainer>
                            <ButtonContainer cart>search products</ButtonContainer>
                        </Text2>
                    </MainText>

                </Body>
            </Item>
        </>
    )
}


const Item = styled.div`
    width:100%;
    height:auto;
    background: var(--lightBlue);
    border-radius: 10px;
`

const Body = styled.div`
    width:100%;
    height:auto;
    display:flex;
`

const Title = styled.h1`
    text-align:center;
    padding: 2rem 0rem;
`

const Image = styled.div`
    width:35%;
    height:auto;
    margin-right: auto;
    padding: 2.5rem 2.5rem;
    img {
        border-radius: 50% 50% 50% 50%;
    }
`
const MainText = styled.div`
    display:block;
    width:55%;
    height:auto;
`
const Text = styled.p`
    width:100%;
    text-align: center;
    padding: 2.5rem 2.5rem;
`

const Text2 = styled.div`
    width: 60%;
    text-align: center;
    padding: 2.5rem 2.5rem;
    margin:auto;
    background: var(--mainBlue);
    border-radius: 10px;
`