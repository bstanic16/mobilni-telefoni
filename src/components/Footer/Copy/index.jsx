import React from 'react';
import styled from 'styled-components';

export default function Copy() {
    return (
        <>
            <Title>copyright © by BStech. all rights reserved  </Title>
        </>
    )
}

const Title = styled.h5`
    text-transform: capitalize;
    text-align:center;
    font-size: 1.1rem;
    padding: 1.2rem 0rem;
    margin: 0;
    color: var(--mainWhite);
`
