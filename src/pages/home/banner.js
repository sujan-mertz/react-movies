import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Banner1 from '../../assets/images/anna.jpg';
import Banner2 from '../../assets/images/alita-battle.jpg';
import Banner3 from '../../assets/images/shaft.jpg';
import Banner4 from '../../assets/images/yesterday.jpg';
import { CgChevronDoubleLeft, CgChevronDoubleRight } from 'react-icons/cg';

const Banner = () =>{
    const [movies] = useState([
        {
            image:Banner1,
            name:"Anna",
            url:""
        },
        {
            image:Banner2,
            name:"Alita Battle",
            url:""
        },
        {
            image:Banner3,
            name:"Shaft",
            url:""
        },
        {
            image:Banner4,
            name:"Yesterday",
            url:""
        }
    ]);

        return(
            <div className="c-banner">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={movies.length}
                    interval={3000}
                    isIntrinsicHeight={true}
                >
                    <Slider>
                        {movies.map((movie, i)=>{
                            return(
                                <Slide key={i} index={i}>
                                    <div className="banner-item">
                                        <img src={movie.image} alt={movie.name}></img>
                                    </div>
                                </Slide>
                            )
                        })}
                    </Slider>
                    <ButtonBack>
                        <CgChevronDoubleLeft/>
                    </ButtonBack>
                    <ButtonNext>
                        <CgChevronDoubleRight/>
                    </ButtonNext>
                </CarouselProvider>   
            </div>
        );
}

export default Banner;