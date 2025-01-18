import React, { useState } from 'react';
import SearchImage from '../../_assets/searchButton.jpeg';
import { findAllMoviesApi } from '../../api/findAllMoviesApi';
import { SearchBarContainer, SearchBarInput, SearchButton, SearchButtonImage } from './SearchBarStyles';

export default function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        findAllMoviesApi(query);
    };

    return (
        <SearchBarContainer>
            <SearchBarInput
                type="text"
                placeholder="영화를 검색해 보세요"
                onChange={(input) => setQuery(input.target.value)}
            />
            <SearchButton onClick={handleSearch}>
                <SearchButtonImage
                    src={SearchImage} 
                    alt="Search"
                />
            </SearchButton>
        </SearchBarContainer>
    )
};
