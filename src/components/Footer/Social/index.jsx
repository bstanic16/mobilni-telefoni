import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Instagram } from '../../svgs/instagram.svg';
import { ReactComponent as Facebook } from '../../svgs/facebook.svg';
import { ReactComponent as Twitter } from '../../svgs/twitter.svg';


export default function Social() {

    return (
        <>
            <Main>
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
const Main = styled.section`
    width:40%;
    margin:auto;
    height:auto;
    /* background: darkred; */
    display: flex;
    justify-content:center;
    padding: 2rem;
    svg {
        width: 4rem;
        height:auto;
        /* background: var(--lightBlue)!important; */
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