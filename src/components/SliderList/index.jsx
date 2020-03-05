import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import WithStyles from './WithStyles';
import Image1 from '../svgs/futrola1.jpg'
import Image2 from '../svgs/futrola2.jpg'
import Image3 from '../svgs/futrola3.jpg'

const Main = styled.div`
    width:100%;
    height:auto;
    padding: 0!important;
    margin:auto;
`

export default class Carousell extends Component {
    render() {
        return (
            <Main>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite={false}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    showDots={true}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    <WithStyles
                        description="Hello my friend. This is some test text for our products. You will be able to edit this div, and to add custom css.. Best regards"
                        headline="Samsung Galaxy S10 Glass"
                        image={Image1}
                    />
                    <WithStyles
                        description="Hello my friend. This is some test text for our products. You will be able to edit this div, and to add custom css.. Best regards"
                        headline="Samsung Galaxy S10 Earphones"
                        image={Image2}
                    />
                    <WithStyles
                        description="Hello my friend. This is some test text for our products. You will be able to edit this div, and to add custom css.. Best regards"
                        headline="Samsung Galaxy S10 Glass cover"
                        image={Image3}
                    />
                    <WithStyles
                        description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
                        headline="w3js.com - web front-end studio"
                        image="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    />
                    <WithStyles
                        description="React Carousel with Server Side Rendering Support – Part 1"
                        headline="w3js.com - web front-end studio"
                        image="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    />
                    <WithStyles
                        description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
                        headline="w3js.com - web front-end studio"
                        image="https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    />
                    <WithStyles
                        description="React Carousel with Server Side Rendering Support – Part 2"
                        headline="w3js.com - web front-end studio"
                        image="https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    />
                    <WithStyles
                        description="React Carousel with Server Side Rendering Support – Part 1"
                        headline="w3js.com - web front-end studio"
                        image="https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    />
                    <WithStyles
                        description="React Carousel with Server Side Rendering Support – Part 1"
                        headline="w3js.com - web front-end studio"
                        image="https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    />
                    <WithStyles
                        description="React Carousel with Server Side Rendering Support – Part 2"
                        headline="w3js.com - web front-end studio"
                        image="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    />
                    <WithStyles
                        description="React Carousel with Server Side Rendering Support – Part 2"
                        headline="w3js.com - web front-end studio"
                        image="https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    />
                    <WithStyles
                        description="React Carousel with Server Side Rendering Support – Part 2"
                        headline="w3js.com - web front-end studio"
                        image="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    />
                </Carousel>
            </Main>
        )
    }
}