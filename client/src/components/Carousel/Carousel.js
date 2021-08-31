import React from "react"

import one from "../../Media/one.jpg"
import two from "../../Media/two.jpg"
import three from "../../Media/three.jpg"

import Carousel from "react-bootstrap/Carousel"


import "./Carousel.css"
export default function () {


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







/* import React from "react"


import imgOne from "../../Media/imgOne.jpg"
import imgTwo from "../../Media/imgTwo.jpg"
import imgThree from "../../Media/imgThree.jpg"
export default function () {
    a
    // Source some images.. maybe in future updayes we can have an option in the teacher profile to upload images along with their class info

    return (
        <div className="container h-25 w-50 rounded overflow-hidden">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgThree} className="d-block w-100 h-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={imgTwo} className="d-block w-100 h-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={imgThree} className="d-block w-100 h-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
} */