import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import Product1 from '../svgs/product-1.png';

export default class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <Item>
                    <Title>Product1</Title>
                    <Body>
                        <Image>
                            <img src={Product1} alt="product1" />
                        </Image>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam unde doloribus recusandae, at iure nulla! Minima fugit commodi
                            ipsam perferendis. Ad rerum veritatis beatae, id illum delectus minima quasi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, dolore architecto autem soluta excepturi voluptatibus consequatur adipisci dolorem quaerat magni nulla minus eveniet eos id quos, ex ipsa. Dolorum, eligendi.
                    </Text>
                    </Body>
                </Item>
                <Item>
                    <Title>Product2</Title>
                    <Body>
                        <Image>
                            <img src={Product1} alt="product1" />
                        </Image>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam unde doloribus recusandae, at iure nulla! Minima fugit commodi
                            ipsam perferendis. Ad rerum veritatis beatae, id illum delectus minima quasi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, dolore architecto autem soluta excepturi voluptatibus consequatur adipisci dolorem quaerat magni nulla minus eveniet eos id quos, ex ipsa. Dolorum, eligendi.
                    </Text>
                    </Body>
                </Item>
                <Item>
                    <Title>Product3</Title>
                    <Body>
                        <Image>
                            <img src={Product1} alt="product1" />
                        </Image>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam unde doloribus recusandae, at iure nulla! Minima fugit commodi
                            ipsam perferendis. Ad rerum veritatis beatae, id illum delectus minima quasi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, dolore architecto autem soluta excepturi voluptatibus consequatur adipisci dolorem quaerat magni nulla minus eveniet eos id quos, ex ipsa. Dolorum, eligendi.
                    </Text>
                    </Body>
                </Item>
                <Item>
                    <Title>Product4</Title>
                    <Body>
                        <Image>
                            <img src={Product1} alt="product1" />
                        </Image>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam unde doloribus recusandae, at iure nulla! Minima fugit commodi
                            ipsam perferendis. Ad rerum veritatis beatae, id illum delectus minima quasi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, dolore architecto autem soluta excepturi voluptatibus consequatur adipisci dolorem quaerat magni nulla minus eveniet eos id quos, ex ipsa. Dolorum, eligendi.
                    </Text>
                    </Body>
                </Item>
                <Item>
                    <Title>Product5</Title>
                    <Body>
                        <Image>
                            <img src={Product1} alt="product1" />
                        </Image>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam unde doloribus recusandae, at iure nulla! Minima fugit commodi
                            ipsam perferendis. Ad rerum veritatis beatae, id illum delectus minima quasi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, dolore architecto autem soluta excepturi voluptatibus consequatur adipisci dolorem quaerat magni nulla minus eveniet eos id quos, ex ipsa. Dolorum, eligendi.
                    </Text>
                    </Body>
                </Item>
                <Item>
                    <Title>Product6</Title>
                    <Body>
                        <Image>
                            <img src={Product1} alt="product1" />
                        </Image>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam unde doloribus recusandae, at iure nulla! Minima fugit commodi
                            ipsam perferendis. Ad rerum veritatis beatae, id illum delectus minima quasi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, dolore architecto autem soluta excepturi voluptatibus consequatur adipisci dolorem quaerat magni nulla minus eveniet eos id quos, ex ipsa. Dolorum, eligendi.
                    </Text>
                    </Body>
                </Item>
            </Slider >
        );
    }
}

const Item = styled.div`
    width:100%;
    height:auto;
    background: var(--lightBlue);
    border-radius: 20px;
`

const Body = styled.div`
    width:100%;
    height:auto;
    display:flex;
`

const Title = styled.h1`
    text-align:center;
    padding: 2rem 0rem;
`

const Image = styled.div`
    width:35%;
    height:auto;
    margin-right: auto;
    padding: 2.5rem 2.5rem;
`

const Text = styled.p`
    width:55%;
    text-align: left;
    padding: 2.5rem 2.5rem;
`