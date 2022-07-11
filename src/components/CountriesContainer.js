import React from 'react';
import CountryContainer from './CountryContainer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Search from './Search';
import FilterByRegion from './FilterByRegion';
import LoadMoreBtn from './LoadMoreBtn';

const CountriesContainer = ({countries}) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };
  const [region, setRegion] = useState('');
  const [currentRegionFilter, setCurrentRegionFilter] = useState(null)
  const [filterOpen, setFilterOpen] = useState(false);
  const [filteredCountries, setCountryFilter] = useState(countries)
  const [search, setSearch] = useState('');
  const [truncatedNumber, setTruncatedNumber] = useState(20)
  const loadMore = () => {
    setTruncatedNumber((prevValue) => prevValue + 10);
};
  const filterBy = (item) => {
    item !== 'all'
    ? setCurrentRegionFilter(item)
    : setCurrentRegionFilter(null)
    item !== 'all'
    ? setRegion(item)
    : setRegion('')

    const regionFilter = item !=='all' 
    ? countries.filter(c => c.region === item) 
    : countries
    setCountryFilter(regionFilter)
    setFilterOpen(false)
  }

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
  const searchCountry = (item)=> {
    setSearch(item)
    setCountryFilter(countries.filter((c) => { 
      return (currentRegionFilter 
        ? c.region === currentRegionFilter && c.name.toLowerCase().includes(item.toLowerCase()) 
        : c.name.toLowerCase().includes(item.toLowerCase()))
      }
    ))
  }

  return (
    <div className='w-full pt-16 pb-16 sm:px-20 flex flex-col align-center gap-10'>
      <div className='z-10 top flex items-center sm:justify-between justify-center--500 flex-wrap'>
        <Search search={search} searchCountry={searchCountry} />
        <FilterByRegion region={region} filterBy={filterBy} filterOpen={filterOpen} setFilterOpen={setFilterOpen} filterItems={filterItems} />
      </div>
      <motion.div 
        className="flex flex-wrap gap-10 justify-between" 
        variants={container}
        initial="hidden"
        animate="visible"
      >
        { filteredCountries.slice(0, truncatedNumber).map((country) => 
           <CountryContainer
            key={country.name}
            country={country}
            layoutId={country}
          />
        )}
      </motion.div>
      <LoadMoreBtn truncatedNumber={truncatedNumber} filteredCountries={filteredCountries} loadMore={loadMore} />
    </div>
  )
}

export default CountriesContainer