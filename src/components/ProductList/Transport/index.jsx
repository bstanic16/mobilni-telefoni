import React from 'react';
import styled from 'styled-components';
import Truck from '../../svgs/truck.svg'
import Lock from '../../svgs/protection.svg';
import Emails from '../../svgs/emails.svg';

const Main = styled.div`
            width: 100%;
            height:auto;
            padding: 1rem 0rem;
        `
const TitleB = styled.h2`
            width:100%;
            text-align: center;
            padding: 1rem 0rem;

            @media(max-width: 768px) {
                width:80%;
                margin:auto;
                font-size: 20px;
            }
            @media(max-width: 320px) {
                width: 95%;
                margin:auto;
            }
        `
const Transport = styled.div`
        width:90%;
        height:auto;
        margin:auto;
        display:flex;
        padding: 0rem 2rem;
        @media(max-width: 768px) {
                width: 100%;
        }
        @media(max-width: 568px) {
            width: 100%;
            display:block;
        }
    `

const Details = styled.div`
        width:100%;
        height:auto;
        padding: 1rem 2rem;
        text-align:center;
        img {
            margin-top: 20px;
        }
    `
const ProdDesc = styled.p`
        width:100%;
        text-align:center;
        color:var(--mainBlue);
        padding: 1rem 0rem;
    `

export default function Transportt() {
    return (
        <Main>
            <Transport>
                <Details>
                    <TitleB className="titleb">Isporuka</TitleB>
                    <img src={Truck} alt="truck" width="50px" height="50px" />
                    <ProdDesc className="transport">U roku od 2-3 radna dana na vasoj adresi</ProdDesc>
                </Details>
                <Details >
                    <TitleB className="titleb">Sigurnost</TitleB>
                    <img src={Lock} alt="lock" width="50px" height="50px" />
                    <ProdDesc className="transport">Vasi podatci ostaju uvek sigurni</ProdDesc>
                </Details>
                <Details >
                    <TitleB className="titleb">Kontaktirajte nas</TitleB>
                    <img src={Emails} alt="mails" width="50px" height="50px" />
                    <ProdDesc className="transport">Ukoliko su Vam potrebne dodatne informacije</ProdDesc>
                </Details>
            </Transport>
        </Main>

    )
}
