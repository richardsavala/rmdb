import React from 'react';

// import Components
import Header from './elements/Header';
import HeroImage from './elements/HeroImage';
import LoadMoreBtn from './elements/LoadMoreBtn';
import MovieThumb from './elements/MovieThumb';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';

const Home = () => (
    <>
        <Header />
        <HeroImage />
        <LoadMoreBtn />
        <MovieThumb />
        <SearchBar />
        <Spinner />
    </>
)

export default Home;