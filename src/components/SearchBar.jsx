import React, { useState } from 'react';

export default SearchBar = ({onSearch}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        const filtroUni = universities.filter(university =>
          university.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        setUniversities(filtroUni);
    return (
        <>
        <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={() => onSearch(inputValue)}>Cerca</button>
        </>
    );


};
}
