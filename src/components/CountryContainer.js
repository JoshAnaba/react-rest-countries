import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const CountryContainer = ({country}) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <>
      <motion.div className="rounded w-60 h-72 shadow-md cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300" 
            variants={item}>
       <Link to={`/country/${country.name.common.toLowerCase()}`}>
        <div className="img-div h-1/2">
          <img src={country.flags[1]} alt={`flag of ${country.name.official}`} className="rounded-t h-full w-full" />
          </div>
          <div className="text-start content flex flex-col justify-start p-2.5">
            <p className="text-base font-semibold">
              {country.name.official}
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
      </motion.div>
    </>
  )
}

export default CountryContainer
