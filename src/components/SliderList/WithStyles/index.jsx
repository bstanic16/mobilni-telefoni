import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    width:80%;
    height:auto;
    margin:auto;
    text-align:center;
    padding: 20px 0px;
`

const Texts = styled.div`
    width:80%;
    height:200px;
    margin:auto;
`

const Title = styled.h3`
    text-align:center;
    height:auto;
`

const Desc = styled.p`
    width:90%;
    margin:auto;
    height:auto;
    text-align:center;
`
const Image = styled.img`
    width:100%;
    height:auto;

`

export default function WithStyles({ description, image, headline }) {
    return (
        <Main className="text-blue">
            <Image src={image} />
            <Texts>
                <Title className="headline-text">{headline}</Title>
                <Desc className="description-text">{description}</Desc>
            </Texts>

        </Main>
    )
}
