import React from 'react';
import CountryContainer from './CountryContainer';
import { useState } from 'react';
// import { BsSearch } from 'react-icons/bs';

const CountriesContainer = ({countries}) => {
  const filterItems = [
    {
      name:'Europe',
      text: 'Europe'
    },
    {
      name: 'Asia',
      text: 'Asia'
    },
    {
      name: 'Americas',
      text: 'America'
    },
    {
      name: 'Oceania',
      text: 'Oceania'
    },
    {
      name: 'Africa',
      text: 'Africa'
    },
    {
      name: 'Antarctic',
      text: 'Antarctic'
    }
  ];
  const [region, setRegion] = useState('');
  const [filteredCountries, setCountryFilter] = useState(countries)
  const [search, setSearch] = useState('');
  const [truncatedNumber, setTruncatedNumber] = useState(20)
  const [filterOpen, setFilterOpen] = useState(false);
  const loadMore = () => {
    setTruncatedNumber((prevValue) => prevValue + 8);
};
  const filterBy = (item) => {
    item !=='all' ? setRegion(item) : setRegion('')
    const regionFilter =item !=='all' ? countries.filter(c => c.region === item) : countries
    setCountryFilter(regionFilter)
    setFilterOpen(false)
  }
  // const data = Object.values(countries);

  // const search_parameters = Object.keys(Object.assign({}, ...data));
  // const  = [...new Set(data.map((item) => item.region))];

  const searchCountry = (items)=> {
    setSearch(items)
      // const searchItem = items.filter(
      //     (item) =>
      //         item.region.includes(filteredCountries) &&
      //         search_parameters.some((parameter) =>
      //             item[parameter].toString().toLowerCase().includes(search)
      //         )
      // );
      // setCountryFilter(searchItem)
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
          <input type="search" id="search" placeholder='Search country' value={search} className='border-0 outline-0 w-96' onChange={(e) => searchCountry(e.target.value)} 
          />
        </div>
        <div>
          <div className="filters relative cursor-pointer items-center w-44">
            <button className="flex items-center gap-5 min-w-full justify-between transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-md p-3.5 rounded-md" onClick={()=>{setFilterOpen(!filterOpen)}}>
              <span className="">{region? region : 'Filter by Region'}</span>
              <span className="material-icons">{!filterOpen ? 'expand_more': 'expand_less'}</span>
            </button>
            {filterOpen && <div className="filter-item-ctn flex flex-col absolute top-14 shadow-md rounded-md w-full right-0 left-0 bg-white pt-2 pb-2">
            <button className="filter-item text-start p-0.5 pr-3.5 pl-3.5 cursor-pointer pl-2 pr-2" onClick={()=>{filterBy('all')}}>All</button>
            {filterItems.sort((a, b)=>{
              const sort = a.name > b.name ? 1 : b.name > a.name ? -1 : 0
              return sort
            }).map((item, index) => {
              return (<button key={index} className={`filter-item text-start p-0.5 pr-3.5 pl-3.5 cursor-pointer pl-2 pr-2 ${region === item.name ? 'active-region': ''}`} onClick={()=>{filterBy(item.name)}}>{region === item.name}{item.text}</button>)
            })}
            </div> }
          </div>
        </div>
        {/* countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())) */}
        </div>
        <div className="flex flex-wrap gap-10 justify-between">
        { filteredCountries.slice(0, truncatedNumber).map((country) => 
          <CountryContainer
            key={country.name.common}
            country={country}
          />
        )}
      </div>
        <button className="load-more shadow-md p-3 rounded-full w-1/5 m-auto" onClick={loadMore}>Load More</button>
    </div>
  )
}

export default CountriesContainer