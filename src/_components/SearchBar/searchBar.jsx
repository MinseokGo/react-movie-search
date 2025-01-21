import React, { useState } from 'react';
import SearchImage from '../../_assets/searchButton.jpeg';
import { findAllMoviesApi } from '../../api/findAllMoviesApi';
import { SearchBarContainer, SearchBarInput, SearchButton, SearchButtonImage } from './SearchBarStyles';

export default function SearchBar({ onSearch, onLoading }) {
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        try {
            onLoading(true);
            const response = await findAllMoviesApi(query);
            console.log('response', response);
            if (response.Response === 'True') {
                onSearch(response.Search);
            } else {
                onSearch([]);
            }
        } catch (error) {
            console.log('영화 검색 중 에러 발생', error);
            onSearch([]);
        } finally {
            onLoading(false);
        }
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
