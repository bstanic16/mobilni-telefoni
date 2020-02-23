import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../../Button';

export default function EmptyCart() {
    return (
        <div className="container mt-5" style={{ height: '45vh' }}>
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>korpa je trenutno prazna</h1>
                    <Link to="/categories">
                        <ButtonContainer>Proizvodi</ButtonContainer>
                    </Link>
                </div>
            </div>
        </div>
    )
}
