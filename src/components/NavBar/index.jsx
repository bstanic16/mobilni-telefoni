import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { Link } from 'react-router-dom';
import './style.css'
import logo from '../../logo1.png';
import burger from '../svgs/menu.svg';
import { ButtonContainer } from '../Button';

class FullPageIntroWithFixedNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        return (
            <div>
                <header>
                    <MDBNavbar className="Nav" expand="md" >
                        <MDBNavbarBrand href="/">
                            <img src={logo} alt="logo" className="navbar-brand" style={{ width: '60px', height: '70px' }} />
                        </MDBNavbarBrand>
                        {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} className="NavTog" image={burger} />}
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <MDBNavbarNav right className="nav">
                                <MDBNavItem>
                                    <Link to="/">
                                        <MDBNavLink to="/" className="NavLink">Pocetna</MDBNavLink>
                                    </Link>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <Link to="/categories">
                                        <MDBNavLink to="/categories" className="NavLink">Proizvodi</MDBNavLink>
                                    </Link>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <Link to="/about">
                                        <MDBNavLink to="/about" className="NavLink">O nama</MDBNavLink>
                                    </Link>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <Link to="/informacije">
                                        <MDBNavLink to="/informacije" className="NavLink">Informacije</MDBNavLink>
                                    </Link>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <Link to="/contact">
                                        <MDBNavLink to="/contact" className="NavLink">Kontaktirajte nas</MDBNavLink>
                                    </Link>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <Link to="/print">
                                        <MDBNavLink to="/print" className="NavLink">Print</MDBNavLink>
                                    </Link>
                                </MDBNavItem>
                                <Link to="/cart" className="Cart">
                                    <MDBNavItem>
                                        <ButtonContainer>
                                            <span className="mr-2">
                                                <i className="fas fa-cart-plus"></i>
                                            </span>
                                            korpa
                                        </ButtonContainer>
                                    </MDBNavItem>
                                </Link>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </header>
            </div>
        );
    }
}

export default FullPageIntroWithFixedNavbar;
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../logo1.png';
// import { ButtonContainer } from '../Button';
// import styled from 'styled-components';

// const NavWrapper = styled.nav`
//     background: var(--mainBlue);
//     .nav-link {
//         color: var(--mainWhite)!important;
//         font-size: 1.3rem;
//         text-transform:capitalize;
//     }
// `

// export default class NavBar extends Component {
//     render() {
//         return (
//             <>
//                 <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5" >
//                     <Link to="/">
//                         <img src={logo} alt="logo" className="navbar-brand" style={{ width: '60px', height: '70px' }} />
//                     </Link>
//                     <ul className="navbar-nav align-items-center">
//                         <li className="nav-item ml-2">
//                             <Link to="/" className="nav-link">
//                                 Pocetna
//                         </Link>
//                         </li>
//                     </ul>
//                     <ul className="navbar-nav align-items-center">
//                         <li className="nav-item ml-2">
//                             <Link to="/categories" className="nav-link">
//                                 Proizvodi
//                         </Link>
//                         </li>
//                     </ul>
//                     <Link to="/cart" className="ml-auto ">
//                         <ButtonContainer>
//                             <span className="mr-2">
//                                 <i className="fas fa-cart-plus"></i>
//                             </span>
//                             korpa
//                     </ButtonContainer>
//                     </Link>
//                 </NavWrapper>
//             </>
//         )
//     }
// }
