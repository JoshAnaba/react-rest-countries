import React, { useEffect, useContext } from 'react';
import CountryContainer from './CountryContainer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Search from './Search';
import FilterByRegion from './FilterByRegion';
import LoadMoreBtn from './LoadMoreBtn';
import { ThemeContext } from '../App';

const CountriesContainer = ({countries}) => {
  const { theme } = useContext(ThemeContext);
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
  useEffect(()=>{
    setTruncatedNumber(20)
  },[region])
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
    <section className={`${theme}-mode-b w-full md:pb-16 md:px-20 px-0 flex flex-col align-center gap-12`}>
      <div className='top flex items-center md:justify-between gap-10 flex-wrap'>
        <Search search={search} searchCountry={searchCountry} />
        <FilterByRegion region={region} filterBy={filterBy} filterOpen={filterOpen} setFilterOpen={setFilterOpen} filterItems={filterItems} />
      </div>
      <motion.div 
        className="flex flex-wrap gap-14 md:justify-between justify-center" 
        variants={container}
        initial="hidden"
        animate="visible"
      >
        { filteredCountries.slice(0, truncatedNumber).map((country) => {
            return (
              <CountryContainer
                key={country.name}
                country={country}
                layoutId={country}
              />
            )
           }
        )}
      </motion.div>
      <LoadMoreBtn truncatedNumber={truncatedNumber} filteredCountries={filteredCountries} loadMore={loadMore} />
    </section>
  )
}

export default CountriesContainer