import React from 'react';
import CountryContainer from './CountryContainer';
import { useState } from 'react';
// import { BsSearch } from 'react-icons/bs';

const CountriesContainer = ({countries}) => {
  const filterItems = [
    'Europe', 'Asia', 'America', 'Oceania', 'Africa'
  ];
  const [region, setRegion] = useState('');
  const [search, setSearch] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const filterBy = (item) => {
    console.log(item.toLowerCase())
    item !=='all' ? setRegion(item) : setRegion('')
    setFilterOpen(false)
  }
  return (
    <div className='pt-16 pb-16 pr-20 pl-20 flex flex-col gap-10'>
      <div className='z-10 h-10 top flex items-center justify-between'>
        <div className="search-bar flex items-center gap-5 shadow-md p-3.5 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <label htmlFor="search">
            <span className="material-icons text-2xl">
              search
            </span>
          </label>
          <input type="search" id="search" placeholder='Search country' value={search} className='border-0 outline-0 w-96' onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
        <div>
          <div className="filters relative cursor-pointer items-center w-44">
            <button className="flex items-center gap-5 min-w-full justify-between transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-md p-3.5 rounded-md" onClick={()=>{setFilterOpen(!filterOpen)}}>
              <span className="">{region? region : 'Filter by Region'}</span>
              <span className="material-icons">expand_more</span>
            </button>
            {filterOpen && <div className="filter-item-ctn flex flex-col absolute top-14 shadow-md rounded-md w-full right-0 left-0 bg-white p-2">
            <button className="filter-item text-start p-0.5 pr-3.5 pl-3.5 cursor-pointer" onClick={()=>{filterBy('all')}}>All</button>
            {filterItems.sort().map((item, index) => {
              return (<button key={index} className="filter-item text-start p-0.5 pr-3.5 pl-3.5 cursor-pointer" onClick={()=>{filterBy(item)}}>{item}</button>)
            })}
            </div> }
          </div>
        </div>
        {/* countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())) */}
        </div>
        <div className="flex flex-wrap gap-10 justify-between">
        { countries.map((country) => 
          <CountryContainer
            key={country.name}
            country={country}
          />
        )}
      </div>
    </div>
  )
}

export default CountriesContainer