import React from 'react'

const Search = ({search, searchCountry}) => {
  return (
    <>
      <div className="search-bar flex items-center gap-5 shadow-md p-3.5 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <label htmlFor="search">
            <span className="material-icons text-2xl">
              search
            </span>
          </label>
          <input type="search" id="search" placeholder='Search country' value={search} className='border-0 outline-0 sm:w-96' onInput={(e) => searchCountry(e.target.value)} 
          />
        </div>
    </>
  )
}

export default Search
