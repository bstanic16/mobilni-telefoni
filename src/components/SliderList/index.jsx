import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";

const CarouselPage = () => {
    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
                mobileGesture={true}
                onHoverStop={true}
                testimonial={false}
                interval={4000}
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(8).jpg"
                                alt="First slide"
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Light mask</h3>
                            <p>First text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                                alt="Second slide"
                            />
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Strong mask</h3>
                            <img style={{ width: '100px', height: '100px' }} src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium culpa voluptatem molestias officiis beatae magnam voluptatibus veniam! Hic harum, obcaecati sunt eligendi possimus, nesciunt eum impedit excepturi accusamus at ab!</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                                alt="Third slide"
                            />
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Slight Mast</h3>
                            <p>Third text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default CarouselPage;