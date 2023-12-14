import { useState, useEffect } from 'react'
import React from 'react'
import SearchBar from './components/SearchBar';
import UniversityList from './components/UniversityList';

import './App.css'

function App() {
  const [universities, setUniversities] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect (() =>{
    const fetchUni = async() => {
      try{
        const response = await fetch("http://universities.hipolabs.com/search?country=Italy");
        const uniArray = await response.json();
        if (uniArray.error) {
          throw new Error(uniArray.error);
        }
        setUniversities(uniArray.map((university) => ({
          name: university.name,
          url: university.web_pages[0],
        })));



      } catch (error) {
        console.error('Errore', error.message);
      }
      };
      fetchUni();
    }, []); 

    const handleFilteredUniversities = (filteredUni) => {
      setUniversities(filteredUni);


  

  return (
    <>
    <div>
      <SearchBar 
        allUniversities={universities}
        filteredUniversities={handleFilteredUniversities}
        />
      <UniversityList 
        universities={universities}/>
    </div>

    </>
  );
}
}
export default App;