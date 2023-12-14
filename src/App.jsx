import { useState, useEffect } from 'react'
import React from 'react'
import UniversityList from './components/UniversityList';
import SearchBar from './components/SearchBar';

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
        const uniList = uniArray.map((university)=>{
          return {
            name: university.name,
            url: university.web_pages[0]
          }
        });
        setUniversities(uniList);
        console.log(uniArray)
      } catch (error) {
        console.error('Errore', error.message);
      }
      };
      fetchUni();
    }, []); 


  

  return (
    <>
      <SearchBar 
        onSearch={(searchValue)=>(setSearchValue)}
        />
      <UniversityList/>

    </>
  );
}

export default App
