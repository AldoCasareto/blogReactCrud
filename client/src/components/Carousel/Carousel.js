import React from "react"


import imgOne from "../../Media/imgOne.jpg"
import imgTwo from "../../Media/imgTwo.jpg"
import imgThree from "../../Media/imgThree.jpg"
export default function () {

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
}