import React from 'react';

import one from "../../Media/one.jpg"
import two from "../../Media/two.jpg"
import three from "../../Media/three.jpg"

import Carousel from "react-bootstrap/Carousel"


import "./Carousel.css"
export default function () {
    // Source some images.. maybe in future updayes we can have an option in the teacher profile to upload images along with their class info


    return (

        <div className="wrapper">

            <Carousel variant="light" fade className="carousel ">
                <Carousel.Item >
                    <img
                        className="imgSize"
                        src={one}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h6>First slide label</h6>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="imgSize"
                        src={two}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h6>Second slide label</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="imgSize"
                        src={one}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h6>Third slide label</h6>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}






