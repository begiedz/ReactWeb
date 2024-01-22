import React, { useState } from 'react';
import Gallery from '../components/Gallery';
import FilterButtons from '../components/FilterButtons';
import { useTranslation } from 'react-i18next';

const MyWork = () => {
    const [selectedTechnology, setSelectedTechnology] = useState('All');
    const [searchText, setSearchText] = useState('');

    const handleFilterChange = (tech) => {
        setSelectedTechnology(tech);
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };


    const { t } = useTranslation()
    return (
        <main className="myWork">
            <h1>{t('navbar.myWork')}</h1>

            <div className='searchUI'>
                <input
                    type="search"
                    placeholder={t('projects.placeholderText')}
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
