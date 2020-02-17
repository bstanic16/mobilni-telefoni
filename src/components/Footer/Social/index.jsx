import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Instagram } from '../../svgs/instagram.svg';
import { ReactComponent as Facebook } from '../../svgs/facebook.svg';
import { ReactComponent as Twitter } from '../../svgs/twitter.svg';


export default function Social() {

    return (
        <>

            <Main>
                <Text>
                    follow us
                </Text>
                <a href="https://www.instagram.com/">
                    <Instagram />
                </a>
                <a href="https://www.facebook.com/">
                    <Facebook />
                </a>
                <a href="https://www.twitter.com/">
                    <Twitter />
                </a>
            </Main>
        </>
    )
}

const Text = styled.h3`
    text-align:center;
    text-transform:capitalize;
    color: var(--mainYellow);
    
`
const Main = styled.section`
    width:60%;
    margin:auto;
    height:auto;
    justify-content:center;
    text-align:center;
    svg {
        width: 3rem;
        height:auto;
        padding: 0.5rem;
        transition: all 0.2s linear;
        cursor:pointer;
        &:hover {
            background: var(--lightBlue)!important;
            border-radius: 20px;
            transition: all 0.5s ease-in-out;
        }
    }
`