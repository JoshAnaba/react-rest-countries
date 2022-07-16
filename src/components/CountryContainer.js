import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import functions from '../utils/functions'

const CountryContainer = ({country}) => {
  const {formatNumber} = functions
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <>
    <Link 
      to={{pathname: `/country/${country.name.toLowerCase()}`}}
      state= {{country}}
    >
      <motion.div className="country-container rounded md:w-60 w-full h-80 shadow-md cursor-pointer" 
        variants={item} whileHover={{
        scale: 1.05,
        duration: 0.1
      }}
      title={country.name}
      >
        <div className="img-div h-1/2">
          <img src={country.flags ? country.flags.png : country.flag} alt={`flag of ${country.name}`} className="rounded-t h-full min-w-full max-w-full" />
        </div>
          <div className="text-start content flex flex-col justify-start p-5">
            <p className="text-lg py-2 font-semibold">
              {country.name}
            </p>
            <div className="little-content">
              <div className="little-content-item text-xs">
                <span className="content-label font-medium">
                  Population:
                </span>
                <span className="content-value">
                  {formatNumber(country.population)}
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
        </motion.div>
      </Link>
    </>
  )
}

export default CountryContainer
