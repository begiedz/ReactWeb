import React, { useState } from 'react';
import Gallery from '../components/Gallery';
import FilterButtons from '../components/FilterButtons';

const MyWork = () => {
    const [selectedTechnology, setSelectedTechnology] = useState('All');
    const [searchText, setSearchText] = useState('');

    const handleFilterChange = (tech) => {
        setSelectedTechnology(tech);
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <main className="myWork">
            <h1>My work</h1>

            <div className='searchUI'>
                <input
                    type="search"
                    placeholder='Search for project...'
                    value={searchText}
                    onChange={handleSearchChange}
                />
                <FilterButtons
                    selectedTechnology={selectedTechnology}
                    onFilterChange={handleFilterChange}
                />
                <Gallery
                    selectedTechnology={selectedTechnology}
                    searchText={searchText}
                />
            </div>
        </main>
    );
};

export default MyWork;
