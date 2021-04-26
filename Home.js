import React, { useState, useEffect } from 'react';
import {
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
} from '../config';

// import Components
import Header from './elements/Header';
import HeroImage from './elements/HeroImage';
import LoadMoreBtn from './elements/LoadMoreBtn';
import MovieThumb from './elements/MovieThumb';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';

// custom hook
import { useHomeFetch } from './hooks/useHomeFetch';

const Home = () => {
    const [{ state, loading, error }, fetchMovies] = useHomeFetch();
    console.log(state);
    return(
        <>
            <Header />
            <HeroImage />
            <LoadMoreBtn />
            <MovieThumb />
            <SearchBar />
            <Spinner />
        </>
    )
}

export default Home;