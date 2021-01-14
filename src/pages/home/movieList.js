import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
// import Aqua from '../../assets/images/aqua.jpg';
import MovieCard from '../../components/movieCard';

import MovieData from '../../utils/movie.json';

class MovieList extends Component{
    constructor(props){
        super(props);
        this.state={
            movies:MovieData
        }
    }
    render(){
        const {movies} = this.state;
        return(
            <section className="c-section c-movies-list">
                <Container>
                    <h2 className="c-section-title">Popular Movies</h2>
                    <Row>
                        {movies.slice(0,12).map((movie,i)=>{
                            return(
                                <Col sm={6} md={4} lg={3} key={i}>
                                    <MovieCard url={`/movie/${movie.id}`} title={movie.title} poster={movie.posterurl}/>
                                </Col>
                            )
                        })}                        
                    </Row>
                </Container>
            </section>
        );
    }
}

export default MovieList;