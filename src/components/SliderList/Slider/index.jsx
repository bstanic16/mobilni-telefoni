import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Sliderr extends React.Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000
        };
        return (
            <>
                <Slider {...settings}>
                    {this.props.children}
                </Slider >
            </>
        );
    }
}