import React, { useState } from 'react';
import SearchBar from './_components/SearchBar/searchBar';
import MovieInformation from './_components/MovieInformation/movieInformation';
import Loader from './_assets/loader.gif';

export default function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const updateMovies = (moviesData) => {
        setMovies(moviesData || []);
    }

    const updateLoading = (loading) => {
        if (loading) {
            setIsLoading(true);
        } else {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    };


    return (
        <div>
            <SearchBar onSearch={updateMovies} onLoading={updateLoading} />
            {isLoading ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5rem' }}>
                    <img src={Loader} alt='Loader' style={{ width: '10rem', marginTop: '10rem'}} />
                </div>
            ) : (
                <MovieInformation movies={movies} />
            )}
        </div>
    );
}
