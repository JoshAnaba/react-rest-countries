import React from 'react'
import { motion } from 'framer-motion'
import functions from '../utils/functions'
const MoreDetailsCountryContainer = ({countryItem}) => {
  const {formatNumber} = functions
  return (
    <>
       <div className="inner-page-country-content flex w-full">
        <motion.div className="lhs w-4/12" animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 0.3 }}>
        <img src={countryItem.flags ? countryItem.flags?.png : countryItem.flag} className="shadow-md w-full" alt={countryItem.name} />
        </motion.div>
        <motion.div className="rhs" animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 0.3 }}>
        <div className="text-start content flex flex-col justify-start p-2.5">
          <p className="text-base text-3xl font-semibold">
                {countryItem.name}
              </p>
            <div className='flex'>
          <div className='lhs'>
              <div className="little-content">
                <div className="little-content-item text-xs">
                  <span className="content-label font-medium">
                    Native Name:
                  </span>
                  <span className="content-value">
                    {countryItem.nativeName}
                  </span>
                </div>
                <div className="little-content-item text-xs">
                  <span className="content-label font-medium">
                    Population:
                  </span>
                  <span className="content-value">
                    {formatNumber(countryItem.population)}
                  </span>
                </div>
                <div className="little-content-item text-xs">
                  <span className="content-label font-medium">
                    Region:
                  </span>
                  <span className="content-value">
                    {countryItem.region}
                  </span>
                </div>
                <div className="little-content-item text-xs">
                  <span className="content-label font-medium">
                    Capital:
                  </span>
                  <span className="content-value">
                    {countryItem.capital}
                  </span>
                </div>
              </div>
          </div>
              <div className='rhs'>
                <div className='little-content'>
                <div className="little-content-item text-xs">
                  <span className="content-label font-medium">
                   Top Level Domain:
                  </span>
                  <span className="content-value">
                    {countryItem.topLevelDomain}
                  </span>
                </div>
                <div className="little-content-item text-xs">
                  <span className="content-label font-medium">
                    Currencies:
                  </span>
                  <span className="content-value">
                    {countryItem?.currencies?.map((e, i) => <span key={e.name}>
                      {e.name} {i+1 !== countryItem.currencies.length && ','}
                    </span>)}
                  </span>
                </div>
                <div className="little-content-item text-xs">
                  <span className="content-label font-medium">
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
            <div className="little-content-item text-xs">
                  <span className="content-label font-medium">
                    Borders:
                  </span>
                  <span className="content-value">
                  {countryItem?.borders?.map((e, i) => <span key={e}>
                      {e} {i+1 !== countryItem.borders.length && ','}
                    </span>)}
                  </span>
                </div>
          </div>
        </motion.div>
       </div>
    </>
  )
}

export default MoreDetailsCountryContainer
