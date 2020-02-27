import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import ButtonUp from '../ButtonUp';

export default function About() {
    return (
        <>
            <ProductWrapper>
                <Title name="o" title="nama" />
                <WhyUs>
                    <WhyUsTitle>kupci na prvom mestu</WhyUsTitle>
                    <WhyUsText>Pre svega nastojimo da zadovoljimo zelje kupaca, i da ponudimo najpovoljnije cena na trzistu</WhyUsText>
                </WhyUs>
                <CompanyDesc>
                    <Text>
                        BLABLA je firma koja se bavi prodajom opreme i rezervnih delova za mobilne telefone, tablete i laptop racunare.
                        Kod nas mozete pronaci veliki izbor artikala renomiranih proizvodjaca po izuzetno povoljnim cenama.
                        Kupovina na BLABLA je odlican nacin da opremite Vas mobilni telefon. Mi smo online prodavnica preglednog sadrzaja i jednostavnog procesa kupovine.
                    </Text>
                    <Block></Block>
                    <Text>
                        Mobilni telefon ima veliki znacaj u svakodnevnom životu i pomoću njega možemo da stupimo u kontakt sa bilo kim na svetu. Preko njega komuniciramo, informišemo se o svemu što je u našoj sferi interesovanja, igramo se... Naša ideja je da obezbedimo najbolju moguću zaštitu mobilnog telefona i da Vam omogućimo rezervni deo ukoliko je potreban.
                        U samo par klikova pronađite asortiman artikala namenjen za Vaš mobilni telefon, izaberite artikal i poručite. Ono što vidite na sajtu je dostupno za poručivanje.
                    </Text>
                </CompanyDesc>
                <WhyUs>
                    <WhyUsTitle>zasto mi?</WhyUsTitle>
                    <WhyUsText>Blabla kao mobilna platforma zadovoljava sve kriterijume kvalitete usluga i iskustva, nudi izuzetnu fleksibilnost i interaktivnost. Nasim potrosacima obezbedjujemo trenutno najtrazenije modele mobilnih telefona u skladu sa svim svetskim trendovima. Od dolaska BLABL platforme, trudimo se da budemo odgovoran i pouzdan partner nasim korisnicima.</WhyUsText>
                </WhyUs>
                <Main>
                    <SubTitle>
                        <Titlee>Misija</Titlee>
                        <Text>Zelimo da budemo prepoznati na trzistu kao kompanija koja podstice primenu novih tehnologija, usmeravajuci kupca da za svoj novac dobije najvise, posebno vodivsi racuna da takva kupovina ima svoju vrednost i u buducnosti.</Text>
                    </SubTitle>
                    <SubTitle>
                        <Titlee>Vizija</Titlee>
                        <Text>Vizija kompanije BLABLA je da pruzi najvisi nivo usluge na domacem trzistu uz stalne inovacije i obogacivanje proizvodnog asortimana. Tu viziju ce ostvariti u saradnji sa svojim partnerima, koji dele iste ciljeve.</Text>
                    </SubTitle>
                </Main>
                <ButtonUp></ButtonUp>
            </ProductWrapper>
        </>
    )
}

const ProductWrapper = styled.section`
    padding: 2rem 0rem;
    @media(max-width: 568px) {
        width: 100%;
    }
    @media(max-width: 320px) {
        width: 100%;
    }
    
`

const CompanyDesc = styled.div`
    width:80%;
    margin:auto;
    height:auto;
    text-align:center;
    padding: 1.5rem 0rem;
    @media(max-width: 320px) {
        width: 100%;
    }
    @media(max-width: 568px) {
        width: 100%;
    }
`

const Main = styled.div`
    width:80%;
    margin:auto;
    height:auto;
    display:flex;
    @media(max-width: 320px) {
        display:block;
    }
    @media(max-width: 568px) {
        width: 100%;
    }
`

const SubTitle = styled.div`
    width:50%;
    height:auto;
    text-align:center;
    padding: 1rem 0rem;
    @media(max-width: 320px) {
        width:90%;
    }
    @media(max-width: 768px) {
        width: 100%;
    }
    
`
const Titlee = styled.h2`
    width:100%;
    color:var(--mainYellow);
    padding: 1rem 0rem;
`

const Text = styled.p`
    color:black;
    width: 80%;
    margin:auto;
    padding: 1.5rem 0.5rem;
    line-height:1.6;
    border: 2px solid var(--mainBlue);
    border-radius: 20px;
    background: var(--lightBlue);
    @media(max-width: 320px) {
        width: 90%;
    }
    @media(max-width: 568px) {
        width: 90%;
    }

    @media(max-width: 768px) {
        width: 95%;
        margin:auto;
    }
`

const WhyUs = styled.div`
    width:100vw;
    height:auto;
    background: var(--mainBlue);
    padding: 2rem 0rem;
`
const WhyUsTitle = styled.h2`
    padding: 1rem 0rem;
    text-align: center;
    text-transform:capitalize;
    color: var(--mainYellow);
`

const WhyUsText = styled.h5`
    width:60%;
    margin:auto;
    text-align:center;
    color: var(--lightBlue);
    line-height:2;
    @media(max-width: 320px) {
        width: 90%;
    }
    @media(max-width: 568px) {
        width: 90%;
    }
    @media(max-width: 768px) {
        width: 80%;
    }
`

const Block = styled.div`
    padding: 0.5rem 0rem;
`