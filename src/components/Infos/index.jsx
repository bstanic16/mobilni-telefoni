import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import Truck from '../svgs/truck.svg'
import Lock from '../svgs/protection.svg';
import Emails from '../svgs/emails.svg';
import ButtonUp from '../ButtonUp';
import Bounce from 'react-reveal/Bounce';

export default function Infos() {
    return (
        <>
            <ProductWrapper>
                <Bounce bottom>
                    <Main>
                        <Title name="Uslovi" title="koriscenja" />
                        <Desc><Strong>Pažnja:</Strong>  molimo vas da pažljivo pročitate uslove korišćenja pre upotrebe internet sajta ili aplikacije BStech. Korišćenjem našeg internet sajta ili aplikacije potvrđujete da ste pročitali, razumeli i prihvatili ove uslove korišćenja (u daljem tekstu: Uslovi). BStech doo Beograd zadržava pravo da u bilo kom trenutku izmeni Uslove unošenjem izmena u ovaj tekst. Predlažemo da s vremena na vreme posetite ovu internet stranicu i proverite da li su se Uslovi možda promenili od vaše poslednje posete.<br />Sadržaji objavljeni na internet sajtu ili aplikaciji BStech, vlasništvo su BStech doo Beograd i mogu se upotrebljavati samo u nekomercijalne svrhe, pri čemu se moraju poštovati i sva navedena upozorenja o autorskim pravima. Nije dozvoljeno menjati sadržaj ovog sajta niti aplikacije ni na koji način, niti ga reprodukovati ili javno prikazivati, izvoditi, distribuirati ili na drugi način koristiti u javne ili komercijalne svrhe. Ukoliko želite da koristite sadržaje objavljene na ovom internet sajtu ili aplikaciji u druge svrhe od ovde navedenih potrebno je da nas kontaktirate radi dobijanja dozvole. </Desc>
                    </Main>
                    <TitleB className="titleb">Kada koristite naš internet sajt ili aplikaciju nije dozvoljeno da:</TitleB>
                    <Ul>
                        <Li>Ometate ili onemogućavate bilo koje funkcije povezane sa sigurnošću na sajtu ili funkcije koje sprečavaju ili ograničavaju upotrebu ili kopiranje dostupnog sadržaja</Li>
                        <Li>bjavljujete ili prenosite na internet sajt ili na aplikaciju svaki materijal koji je preteći, klevetnički, nepristojan, uvredljiv, pornografski ili zlostavljački. Takođe materijal kojim možete inicirati rasnu mržnju, uzrokujete uznemiravanje ili bilo koje neprijatnosti usled kršenja privatnosti, poverenja određenim diskriminacionim, pretećim ili izazivačkim komentarima </Li>
                        <Li>Dajete netačne informacije koje se tiču ličnih podataka u vašem profilu </Li>
                        <Li>Koristite tuđe lične podatke bez dozvole te osobe ili lažno predstavljate da istupate u ime trećeg lica, firme ili organizacije</Li>
                        <Li>Bavite se bilo kojim nezakonitim ili protivpravnim ponašanjem</Li>
                        <Li>Modifikujete, ometate, presrećete ili hakujete internet sajt ili aplikaciju u cilju njihovog onesposobljavanja</Li>
                        <Li>Koristite specijalizovane programe radi preuzimanja sadržaja sa sajta ili aplikacije</Li>
                        <Desc><Strong> Ako prekršite bilo koji od ovih Uslova mi Vas možemo sprečiti da koristite ovaj internet sajt ili aplikaciju na stalnom ili privremenom nivou. Mi možemo preduzeti i druge mere, uključujući ali ne ograničavajući se na to da Vas prijavimo nadležnim državnim organima, pošaljemo upozorenje ili podnesemo tužbu. </Strong></Desc>
                    </Ul>
                    <div></div>
                    <Transport>
                        <Details>
                            <TitleB className="titleb">Isporuka</TitleB>
                            <img src={Truck} alt="truck" width="50px" height="50px" />
                            <ProdDesc>U roku od 2-3 radna dana na vasoj adresi</ProdDesc>
                        </Details>
                        <Details >
                            <TitleB className="titleb">Sigurnost</TitleB>
                            <img src={Lock} alt="lock" width="50px" height="50px" />
                            <ProdDesc>Vasi podatci ostaju uvek sigurni</ProdDesc>
                        </Details>
                        <Details >
                            <TitleB className="titleb">Kontaktirajte nas</TitleB>
                            <img src={Emails} alt="mails" width="50px" height="50px" />
                            <ProdDesc>Ukoliko su Vam potrebne dodatne informacije</ProdDesc>
                        </Details>
                    </Transport>
                    <TitleB className="titleb">Uputstvo za online kupovinu: </TitleB>
                    <Ul>
                        <Li>Registrujte se da biste mogli da naručite proizvode. Registracija se vrši popunjavanjem Formulara za registraciju;</Li>
                        <Li>Kada pronađete proizvod koji želite da naručite, kliknite na njegovu sličicu ili naziv pored sličice da uđete na stranu sa detaljnim prikazom ili na dugme "U korpu" ukoliko želite odmah da kupite; </Li>
                        <Li>Na strani sa detaljnim prikazom kliknite dugme "U korpu" da biste ubacili proizvod u svoju korpu za kupovinu; </Li>
                        <Li>Prikazaće Vam se strana sa sadržajem korpe. Kliknite na dugme "Naruči"</Li>
                        <Li>Prikazaće Vam se formular za naručivanje. Popunite formular i kliknite dugme "Nastavi naručivanje"; </Li>
                        <Li>Videćete stranu sa detaljima narudžbe. Proverite i potvrdite detalje narudžbe. Zatim kliknite dugme "Potvrđujem narudžbu" da izvršite narudžbu; </Li>
                        <Li>Vaša porudžbenica je uspešno kreirana. Ukoliko je naručena roba dostupna i spremna za realizaciju naše saradnje naš operater će Vas kontaktirati u roku ne dužem od jednog radnog dana od trenutka prijema narudžbenice radi provere ispravnosti Vaših podataka i potvrde narudžbenice. Trenutni status Vaše porudžbine je – na čekanju. Status Vaše porudžbine možete proveriti kroz Vaš nalog na sajtu. Za detaljnija objašnjenja pogledajte odeljak</Li>
                    </Ul>
                    <TitleB className="titleb">Cene: </TitleB>
                    <Desc>Sve cene navedene na sajtu su finalne na dan porudžbine i u njih je uključen PDV. Sve cene su date u dinarima.Po zaključenju porudžbine na sajtu, dobićete e-mail potvrdu porudžbine. Ovaj e-mail sadrži vaše podatke, koje ste ostavili prilikom poručivanja. Tek nakon dostavljanja potvrde od strane BStech na mail potrošača, ugovor o prodaji se smatra zaključenim. U slučaju da nismo u mogućnosti da potvrdimo porudžbinu i zaključimo ugovor, bićete obavešteni. </Desc>
                </Bounce>
                <ButtonUp />
            </ProductWrapper>
        </>
    )
}

const ProductWrapper = styled.section`
    padding: 1rem 0rem;
    overflow: hidden;
`

const Main = styled.div`
            width: 100%;
            height:auto;
        padding: 1rem 0rem;
        `

const Desc = styled.p`
            width: 70%;
            margin: auto;
            letter-spacing: 0.03rem;
            text-align:center;
            font-family: "Oswald", sans-serif !important;
            font-size: 0.9rem;
            padding: 1rem 3rem;
            border-radius: 30px;
            background:var(--lightBlue);
            @media(max-width: 768px) {
                width: 90%;
            }
            @media(max-width: 568px) {
                width: 95%;
            padding: 1rem 0.5rem;
            }
            @media(max-width: 320px) {
                width: 95%;
                padding: 1rem 1rem;
            }
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
const Ul = styled.ul`
    width:70%;
    height:auto;
    margin:auto;
    padding: 1.5rem 3.5rem;
    border-radius: 30px;
    background:var(--lightBlue);
    @media(max-width: 768px) {
            width: 90%;
    }
    @media(max-width: 320px) {
        width: 95%;
        padding: 1.5rem 2.5rem;
    }
`

const Li = styled.li`
    width: 100%;
    height:auto;
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
    color:var(--mainYellow);
    padding: 1rem 0rem;
`

const Strong = styled.strong`
    color:var(--darkBlue);
`