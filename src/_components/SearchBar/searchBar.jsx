import React, { useState } from 'react';
import SearchButton from '../../_assets/searchButton.jpeg';
import { findAllMoviesApi } from '../../api/findAllMoviesApi';

export default function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        findAllMoviesApi(query);
    };

    return (
        <div style= {{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <input 
                type="text" 
                placeholder="영화를 검색해 보세요" 
                style={{ width: '600px', height: '45px', border: '1px solid #D0D0D0', borderRadius: '10px', fontSize: '20px' }}
                onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch} style={{ backgroundColor: 'white', border: 'none' }}>
                <img 
                    src={SearchButton} 
                    alt="Search" 
                    style={{ width: '30px', marginLeft: '10px' }} 
                />
            </button>
        </div>
    )
};
