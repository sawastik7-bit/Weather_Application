import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {
    const[city,setCity]=useState('');

    const handleSearch=()=>{
        if(city.trim()==='') return;
onSearch(city);
    }

    const handleKeyDown=(e)=>{
        if(e.key==='Enter'){
            handleSearch();
        }
    }
  return (
    <div>
      <input type="text"
      placeholder='Enter city name...'
      value={city}
      onChange={(e)=>{
        setCity(e.target.value)
      }}
      onKeyDown={handleKeyDown}
       />
       <button onClick={handleSearch}></button>
    </div>
  )
}

export default SearchBar


