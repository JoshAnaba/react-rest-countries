import React from 'react'

const CountryContainer = ({country}) => {
  return (
    <div className="rounded w-48 h-64 shadow-md cursor-pointer">
    <div className="img-div h-1/2">
    <img src={country.flag} alt={`flag of ${country.name}`} className="rounded-t h-full w-full" />
    </div>
    <div className="content p-2.5">
      <p className="text-base font-semibold">
        {country.name}
      </p>
      <div className="little-content">
        <div className="little-content-item text-xs">
          <span className="content-label font-medium">
            Population:
          </span>
          <span className="content-value">
            {country.population}
          </span>
        </div>
        <div className="little-content-item text-xs">
          <span className="content-label font-medium">
            Region:
          </span>
          <span className="content-value">
            {country.region}
          </span>
        </div>
        <div className="little-content-item text-xs">
          <span className="content-label font-medium">
            Capital:
          </span>
          <span className="content-value">
            {country.capital}
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CountryContainer
