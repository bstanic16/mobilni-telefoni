import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import { Link } from 'react-router-dom';
import './style.css'
import logo from '../../logo2.png';
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

    offCollapse = () => {
        this.setState({
            collapse: false
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
                            <MDBNavbarNav left className="nav">
                                <MDBNavItem className="NavItem">
                                    <MDBNavLink to="/" className="NavLink" onClick={this.offCollapse}>Pocetna</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem className="NavItem">
                                    <MDBNavLink to="/categories" className="NavLink" onClick={this.offCollapse}>Proizvodi</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem className="NavItem">
                                    <MDBNavLink to="/about" className="NavLink" onClick={this.offCollapse}>O nama</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem className="NavItem">
                                    <MDBNavLink to="/informacije" className="NavLink" onClick={this.offCollapse}>Informacije</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem className="NavItem">
                                    <MDBNavLink to="/contact" className="NavLink" onClick={this.offCollapse}>Kontaktirajte nas</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem className="NavItem">
                                    <MDBNavLink to="/print" className="NavLink" onClick={this.offCollapse}>Print</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <div className="Cart">
                                <Link to="/cart" className="Cart">
                                    <MDBNavItem className="NavItem">
                                        <ButtonContainer>
                                            <span className="mr-2">
                                                <i className="fas fa-cart-plus"></i>
                                            </span>
                                            korpa
                                        </ButtonContainer>
                                    </MDBNavItem>
                                </Link>
                            </div>
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
