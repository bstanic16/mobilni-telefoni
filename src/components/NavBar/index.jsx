import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo1.png';
import { ButtonContainer } from '../Button';
import styled from 'styled-components';

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite)!important;
        font-size: 1.3rem;
        text-transform:capitalize;
    }
`

export default class NavBar extends Component {
    render() {
        return (
            <>
                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5" >
                    <Link to="/">
                        <img src={logo} alt="logo" className="navbar-brand" style={{ width: '60px', height: '70px' }} />
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-2">
                            <Link to="/" className="nav-link">
                                Pocetna
                        </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-2">
                            <Link to="/categories" className="nav-link">
                                Proizvodi
                        </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto ">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-cart-plus"></i>
                            </span>
                            korpa
                    </ButtonContainer>
                    </Link>
                </NavWrapper>
            </>
        )
    }
}
