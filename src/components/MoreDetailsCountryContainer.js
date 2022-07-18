import React, { useEffect, useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import functions from '../utils/functions'
import { ThemeContext } from '../App'
const MoreDetailsCountryContainer = ({ countryItem, countries }) => {
  const { theme } = useContext(ThemeContext);
  const {formatNumber} = functions
  const [borders, setBorders] = useState([])
  const getCountriesNamesFromBorderArray = () => {
    let bordersArray = []
    countryItem?.borders?.forEach(e=>{
      countries?.map( c => {
        if (c.alpha3Code === e) {
          bordersArray.push(c)
        }
        return c
      })
      setBorders(bordersArray)
    })
  }
  useEffect(()=>{
    getCountriesNamesFromBorderArray()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries])
  return (
    <>
      <div className="inner-page-country-content flex w-full flex-col md:flex-row justify-between">
        <motion.div className="lhs md:w-4/12 p-5 rounded-md" animate={{ x: 0 }} transition={{ ease: "easeOut", duration: 0.3 }}>
          <img src={countryItem.flags ? countryItem.flags?.png : countryItem.flag} className="w-full md:scale-150 origin-left shadow-md" alt={countryItem.name} />
        </motion.div>
        <motion.div className="rhs w-full md:w-1/2" animate={{ x: 0 }} transition={{ ease: "easeOut", duration: 0.3 }}>
          <div className="content text-start flex flex-col justify-start p-2.5">
            <p className="text-base text-2xl md:text-3xl font-semibold mb-8">
              {countryItem.name}
            </p>
            <div className='flex justify-between md:flex-row flex-col gap-10 md:gap-0'>
              <div className='lhs'>
                <div className="little-content flex flex-col gap-3">
                  <div className="little-content-item text-xs pb-3">
                    <span className="content-label font-semibold">
                      Native Name:
                    </span>
                    <span className="content-value">
                      {countryItem.nativeName}
                    </span>
                  </div>
                  <div className="little-content-item text-xs pb-3">
                    <span className="content-label font-semibold">
                      Population:
                    </span>
                    <span className="content-value">
                      {formatNumber(countryItem.population)}
                    </span>
                  </div>
                  <div className="little-content-item text-xs pb-3">
                    <span className="content-label font-semibold">
                      Region:
                    </span>
                    <span className="content-value">
                      {countryItem.region}
                    </span>
                  </div>
                  <div className="little-content-item text-xs pb-3">
                    <span className="content-label font-semibold">
                      Capital:
                    </span>
                    <span className="content-value">
                      {countryItem.capital}
                    </span>
                  </div>
                </div>
              </div>
              <div className='rhs'>
                <div className='little-content flex flex-col gap-3'>
                  <div className="little-content-item text-xs pb-3">
                    <span className="content-label font-semibold">
                      Top Level Domain:
                    </span>
                    <span className="content-value">
                      {countryItem.topLevelDomain}
                    </span>
                  </div>
                  <div className="little-content-item text-xs pb-3">
                    <span className="content-label font-semibold">
                      Currencies:
                    </span>
                    <span className="content-value">
                      {countryItem?.currencies?.map((e, i) => <span key={e.name}>
                        {e.name} {i+1 !== countryItem.currencies.length && ','}
                      </span>)}
                    </span>
                  </div>
                  <div className="little-content-item text-xs pb-3">
                    <span className="content-label font-semibold">
                      Languages:
                    </span>
                    <span className="content-value">
                    {countryItem?.languages?.map((e, i) => <span key={e.name}>
                        {e.name} {i+1 !== countryItem.languages.length && ','}
                      </span>)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border little-content-item flex md:flex-row flex-col text-xs">
              <span className="py-2 content-label font-semibold">
                Border Countries:
              </span>
              <div
                className="content-value flex flex-wrap gap-1.5 px-2">
                {borders?.map((e, i) => {
                  return (
                    <Link
                    to={`/country/${e.name.toLowerCase()}`}
                    className={`${theme}-mode-el p-2 px-2.5 shadow-md rounded gap-10`}
                    key={e.name}
                  >
                    {e.name}
                  </Link>
                  )}
                )}
              </div>
            </div>
          </div>
        </motion.div>
       </div>
    </>
  )
}

export default MoreDetailsCountryContainer
