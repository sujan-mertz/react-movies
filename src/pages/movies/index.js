import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Button, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';
import MovieCard from '../../components/movieCard';
import MainLayout from '../../layouts/mainLayout';
import MovieData from '../../utils/movie.json';
var timer = "";

const Movies = () =>{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         search:"",
    //         error:"",
    //         movies:MovieData
    //     }
    // }
    // handleFormValidation = (e) =>{
    //     let errorMessage="";
    //     if(!this.state.search) errorMessage="Please enter correct keyword!";
    //     return errorMessage;
    // }
    // handleInputChange = (e) =>{
    //     clearTimeout(timer);
    //     timer = setTimeout(() => {            
    //         this.setState({
    //             search:e.target.value
    //         })
    //     }, 500);
    // }
    // handleFormSubmit = (e) =>{
    //     e.preventDefault();
    //     const err = this.handleFormValidation();

    //     this.setState({
    //         error:err
    //     },()=>{
    //         if(!err){
    //             return true;
    //         }else{
    //             return false;
    //         }
    //     })
    // }

    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [movies,setMovies] = useState(null); //or const [movies,setMovies] = useState(MovieData);
    const [filteredMovies, setFilteredMovies] = useState(null);

    useEffect(()=>{
        setMovies(MovieData);
    },[]);

    useEffect(()=>{
        const filteredResult = movies && movies.filter(movie=>movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
        setFilteredMovies(filteredResult);
    },[movies, search]);

    const handleFormValidation = () =>{
        let errorMessage="";
        if(!search) errorMessage="Please enter correct keyword!";
        return errorMessage;
    }
    const handleInputChange = (e) =>{
        clearTimeout(timer);
        timer = setTimeout(() => {            
            setSearch(e.target.value);
        }, 500);
    }
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const err = handleFormValidation();

        setError(err);
        if(!err){
            return true;
        }else{
            return false;
        }

    }

    // const {error,movies,search} = this.state;
    // const filteredMovies = movies.filter(movie=>movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    return(
        <MainLayout>
            <div className="page-movies">
                <Container>
                    <Row className="justify-content-center mb-5">
                        <Col lg={7}>
                            <Form inline onSubmit={handleFormSubmit} className="mb-2">
                                <FormGroup>
                                    <Input type="text" name="search" placeholder="Enter the movie name or keyword" onChange={handleInputChange}/>
                                </FormGroup>
                                <Button type="submit"><FaSearch/> Search</Button>
                            </Form>
                            {error && <p className="text-sm text-danger">{error}</p>}
                        </Col>
                    </Row>
                    <Row>
                        {filteredMovies && filteredMovies.map((movie,i)=>{
                            return(
                                <Col sm={6} md={4} lg={3} key={i}>
                                    <MovieCard url={`/movie/${movie.id}`} title={movie.title} poster={movie.posterurl}/>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </MainLayout>
    );
}

export default Movies;