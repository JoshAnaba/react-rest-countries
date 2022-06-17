import React from 'react'
import { Link } from 'react-router-dom'

const CountryContainer = ({country}) => {
  return (
    <>
      <div className="rounded w-60 h-72 shadow-md cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
       <Link to={`/country/${country.name.toLowerCase()}`}>
        <div className="img-div h-1/2">
          <img src={country.flag} alt={`flag of ${country.name}`} className="rounded-t h-full w-full" />
          </div>
          <div className="text-start content flex flex-col justify-start p-2.5">
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
        </Link>
      </div>
    </>
  )
}

export default CountryContainer
