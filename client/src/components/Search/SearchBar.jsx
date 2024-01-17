import React, { useEffect, useState } from 'react';
// import { AiOutlineSearch } from 'react-icons/ai';
import useSearchHandler from '../../hooks/useSearchHandler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);
    const [onFocus, setFocus] = useState(false);
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

    const { handleSearch, handleSearchChange } = useSearchHandler({ searchInput, setSearchInput, setSuggestions, setFocus, setSelectedSuggestionIndex, setSearchHistory })

    useEffect(() => {
        const storedSearchHistory = localStorage.getItem('searchHistory');
        if (storedSearchHistory) {
            setSearchHistory(JSON.parse(storedSearchHistory));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }, [searchHistory]);

    return (
        <>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search Product..."
                    value={searchInput}
                    onChange={handleSearchChange}
                    onFocus={() => {
                        setFocus(true);
                    }}
                    // onBlur={() => {
                    //   setFocus(false);
                    //   setSuggestions([]);
                    // }}
                    // onKeyDown={handleKeyDown}
                    className="h-[40px] w-full px-2 border-[black] border-[1px] rounded-md"
                />
                <button type="submit" className='DronesHeader-search-icon'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
            <div className="sug-div">
                {suggestions?.length > 0 &&
                    suggestions.slice(0, 10).map((val, index) => (
                        <button
                            key={index}
                            onClick={() => setSearchInput(val)}
                            className={
                                index === selectedSuggestionIndex ? 'selected' : 'search-sug'
                            }
                        >
                            {val}
                        </button>
                    ))}
                {onFocus &&
                    searchHistory.map((term, index) => (
                        <button
                            onClick={() => setSearchInput(term)}
                            className={
                                index === selectedSuggestionIndex ? 'selected' : 'search-sug'
                            }
                            key={index}
                        >
                            {term}
                        </button>
                    ))}
            </div>
        </>
    );
};

export default SearchBar;
