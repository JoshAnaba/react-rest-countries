import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const Search = ({search, searchCountry}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`${theme}-mode-el search-bar flex items-center gap-5 md:w-1/2 w-full shadow-md p-3.5 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}>
          <label htmlFor="search">
            <span className="material-icons text-2xl">
              search
            </span>
          </label>
          <input type="search" id="search" placeholder='Search for a country...' value={search} className='border-0 outline-0 w-full' onInput={(e) => searchCountry(e.target.value)} 
          />
        </div>
    </>
  )
}

export default Search
