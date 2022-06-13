import React from 'react'
import CountryContainer from './CountryContainer'

const CountriesContainer = ({countries}) => {
  return (
    <div className="flex flex-wrap gap-10 justify-between pt-16 pb-16 pr-20 pl-20">
        { countries.map((country) => 
          <CountryContainer
            key={country.name}
            country={country}
          />
        )}
    </div>
  )
}

export default CountriesContainer
