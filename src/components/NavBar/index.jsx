import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css'
import logo from '../../logo1.png';
import burger from '../svgs/menu.svg';

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
                    <Router>
                        <MDBNavbar className="Nav" expand="md" >
                            <MDBNavbarBrand href="/">
                                <img src={logo} alt="logo" className="navbar-brand" style={{ width: '60px', height: '70px' }} />
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} className="NavTog" image={burger} />}
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav right>
                                    <MDBNavItem active >
                                        <MDBNavLink to="/" className="NavLink">Pocetna</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/categories" className="NavLink">Proizvodi</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/print" className="NavLink">Print</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </Router>
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
