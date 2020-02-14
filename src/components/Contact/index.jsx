import React, { Component } from 'react';
import Title from '../Title';
import styled from 'styled-components';
import { Input, Text } from '../Input';
import { ButtonContainer } from '../Button';

export default class Contact extends Component {
    render() {
        return (
            <ProductWrapper className="py-5">
                <div className="container">
                    <Title name="contact" title="us" />
                    <div className="row justify-content-center">
                        <form action="" className="row justify-content-center">
                            <div className="col-9 py-2">
                                <Input type="text" placeholder="firstname" />
                                <Input type="text" placeholder="lastname" />
                            </div>
                            <div className="col-9 py-2">
                                <Input type="text" placeholder="email" />
                            </div>
                            <div className="col-9 py-2">
                                <Text placeholder="message"></Text>
                            </div>
                            <div className="col-9 py-2 justify-content-center align-items-center">
                                <ButtonContainer>SUBMIT</ButtonContainer>
                            </div>
                        </form>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.section``