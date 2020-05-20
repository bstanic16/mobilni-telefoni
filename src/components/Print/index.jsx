import React from 'react';
import Title from '../Title';
import styled from 'styled-components';
import Img from '../svgs/product-1.png';
import Bounce from 'react-reveal/Bounce';
import ButtonUp from '../ButtonUp';

const ProductWrapper = styled.div`
    overflow: hidden;
    width:100%;
`

const Main = styled.div`
    width:90%;
    margin:auto;
    height:auto;
    display:flex;
    padding: 1rem 0rem;
    @media(max-width: 768px) {
        width: 100%;
        height:auto;
        margin:auto;
    }
    @media(max-width: 568px) {
        display:block;
    }
`

const Piece = styled.div`
    width:20%;
    height:300px;
    padding:0.5rem 0.5rem;
    @media(max-width: 768px) {
        width: 40%;
        height:auto;
        margin:auto;
    }

    @media(max-width: 568px) {
        width:50%;
        margin:auto;
    }
    @media(max-width: 320px) {
        width:80%;
        margin:auto;
    }
`
const Piece1 = styled.div`
    width:20%;
    height:300px;
    padding:0.5rem 0.5rem;
    @media(max-width: 768px) {
        display:none;
    }
`

const TitleB = styled.h5`
    width: 80%;
    margin:auto;
    color:var(--mainDark);
    font-weight:bold;
    padding:1rem 0rem;
    border-bottom: 2px solid var(--lightBlue);
`

const Image = styled.img`
    width:100%;
    height:auto;
    padding: 1rem 0.5rem;
    border-radius:50px;
    overflow: hidden;
    &:hover {
        overflow: hidden;
        cursor: zoom-in;
        border-top: 4px solid var(--lightBlue);
        border-bottom:4px solid var(--lightBlue);
    }
    @media(max-width: 768px) {
        width:95%;
        margin:auto;
    }
    @media(max-width: 568px) {
        width:100%;
        margin:auto;
    }
`

const DescMain = styled.div`
    width:50%;
    height:auto;
    margin:auto;
    text-align:center;
    padding:1rem 0rem;
    @media(max-width: 768px) {
        width:50%;
        margin:auto;
    }
    @media(max-width: 568px) {
        width:100%;
        margin:auto;
    }
    
`

const Desc = styled.p`
    width:90%;
    height:auto;
    margin:auto;
    text-align:center;
    padding:1rem 0rem;
`

export default function Print() {
    return (
        <ProductWrapper className="py-3">
            <Bounce bottom>
                <Title name="Print maska" title="po zelji" />
                <Main>
                    <Piece>
                        <Image src={Img} alt="Promo" />
                    </Piece>
                    <Piece>
                        <Image src={Img} alt="Promo" />
                    </Piece>
                    <Piece1>
                        <Image src={Img} alt="Promo" />
                    </Piece1>
                    <Piece1>
                        <Image src={Img} alt="Promo" />
                    </Piece1>
                    <Piece1>
                        <Image src={Img} alt="Promo" />
                    </Piece1>
                </Main>
                <Main>
                    <DescMain>
                        <TitleB className="print-title">Cena futrole sa štampom je 990 rsd bez obzira na model telefona.</TitleB>
                        <Desc className="print-desc">U ponudi imamo maske za preko 1000 modela mobilnih telefona, dovoljno je da nam napišete model Vašeg telefona i da izaberete fotografiju, a mi ćemo Vam obezbediti najkvalitetniju štampu željene fotografije. </Desc>
                    </DescMain>
                    <DescMain>
                        <TitleB className="print-title">Kvalitet naših maski za mobilne telefone</TitleB>
                        <Desc className="print-desc">U ponudi imamo različite maske za većinu mobilnih telefona. Maske su izrađene od visoko kvalitetnog silikona koji rukovanje samim mobilnim telefonom sa maskom čini jako prijatnom sa istovremenom zaštitom.</Desc>
                    </DescMain>
                </Main>

                <Main>
                    <DescMain>
                        <TitleB className="print-title">Kvalitet štampe i mastila</TitleB>
                        <Desc className="print-desc">Kako bi u potpunosti obezbedili proizvodnju kvalitetne štampe, koristi se specijalno UV mastilo koje dozvoljava da sama štampa na maskama mobilnih telefona bude identična dizajnu i verodostojna fotografiji, dovodeći do najkvalitetnijeg jasnog otiska.</Desc>
                    </DescMain>
                    <DescMain>
                        <TitleB className="print-title">Izbor fotografija za štampu</TitleB>
                        <Desc className="print-desc">U mogućnosti ste da odštampate masku sa vašom slikom ili bilo kojom drugom fotografijom po Vašem izboru, i naš Printing Centar upravo nudi presonalizovane maske sa štampom po izboru. To može biti bilo koja fotografija, karikatura ili nešto drugo, šta god da nam pošaljete.</Desc>
                    </DescMain>
                </Main>
                <Main>
                    <Piece>
                        <Image src={Img} alt="Promo" />
                    </Piece>
                    <Piece>
                        <Image src={Img} alt="Promo" />
                    </Piece>
                    <Piece1>
                        <Image src={Img} alt="Promo" />
                    </Piece1>
                    <Piece1>
                        <Image src={Img} alt="Promo" />
                    </Piece1>
                    <Piece1>
                        <Image src={Img} alt="Promo" />
                    </Piece1>
                </Main>
                <Main>
                    <DescMain>
                        <TitleB className="print-title">Rokovi za izradu maske</TitleB>
                        <Desc className="print-desc">Sve maske za štampu koje poručite u toku radnog dana izrađujemo u roku od 3 radna dana, a nakon toga prosleđeni dostavu u roku od 24h. Naravno, imajte na umu da tokom vikenda i praznika poručene maske će biti poslate na štampu tek sledećeg prvog radnog dana. Nakon što se maska odštampa, poslaćemo Vam informaciju da je maska odštampana i spremna za preuzimanje ili slanje na Vašu adresu. Dostavu vršimo Post Expressom. Takođe, možete dobiti i broj pošiljke na osnovu kog možete pratiti gde se nalazi Vaša porudžbina, a porudžbinu možete pratiti na sajtu Post Express-a.</Desc>
                    </DescMain>
                    <DescMain>
                        <TitleB className="print-title">Vrste maski u ponudi</TitleB>
                        <Desc className="print-desc">U ponudi imamo preko 1000 modela silikonskih maski koje su najbolje rešenje za zaštitu vašeg mobilnog telefona. Silikonske maske takođe imaju prednju zaštitu u vidu dela silikona koji prelazi preko ruba telefona ka displeju telefona, a kako bi se osiguralo da prednjii deo Vašeg uređaja prilikom spuštanja telefona na sam ektan obezbeđuje da ektan telefona ne dodiruju površinu na koju su spušteni. Kod nas možete da poručite masku sa štampom za mobilne telefone: Samsung, BlackBerry, iPhone, Huawei, HTC, LG, LENOVO, Nokia, Microsoft, TESLA, SONY, Meizu, XIAOMI, Alcatel...</Desc>
                    </DescMain>
                </Main>
            </Bounce>
            <ButtonUp></ButtonUp>
        </ProductWrapper>
    )
}
