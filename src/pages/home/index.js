import React from 'react';
import MainLayout from '../../layouts/mainLayout';
import Banner from './banner';
import MovieList from './movieList';

const HomePage = () =>{
    return(
        <MainLayout>
            <Banner/>
            <MovieList/>
        </MainLayout>
    );
}

export default HomePage;