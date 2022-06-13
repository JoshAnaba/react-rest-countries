import React from 'react'
import CountryContainer from './CountryContainer'

const CountriesContainer = ({countries}) => {
  return (
    <div className='pt-16 pb-16 pr-20 pl-20'>
      <input type="search" placeholder='Search country' />
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
