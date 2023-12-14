import React, { useState } from 'react';

const SearchBar = ({universities, filteredUniversities}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        const filtroUni = universities.filter(university =>
          university.name.toLowerCase().includes(inputValue.toLowerCase())
        );
    
        filteredUniversities(filtroUni);
    };

    return (
        <>
        <div>
            <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleSearch}>Cerca</button>
        </div>
        </>
    );


};


export default SearchBar
