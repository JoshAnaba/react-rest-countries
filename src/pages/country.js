import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from "framer-motion"
import axios from "axios";
// import CountryContainer from '../components/CountryContainer';
import BackBtn from '../components/BackBtn';
const Country = () => {
  const { name } = useParams()
  const baseURL = "https://restcountries.com/v3/";
  const [loading, setLoading] = useState(true);
  const [countryItem, setCountry] = useState(null);
  const [error, setError] = useState(null);
    const getCountryUrl = () => {
      return `${baseURL}name/${name}`
    }
    const fetchCountry = async () => {
      setCountry({})
      await axios(getCountryUrl())
      .then((onfulfilled) => {
        setCountry(onfulfilled.data[0])
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
    }

  useEffect(() => {
      fetchCountry()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  if (error) {
    return (
    <div>
      <div>{error}</div>
    </div>
  )
  } else if (loading) {
    return (
      <div>
        <div className="flex flex-col items-center">Loading...</div>
      </div>
    )
  } else if (countryItem){
    return (
      <div className="w-full pb-20">
       <div className="top pb-20">
       <BackBtn />
       </div>
       <div className="inner-page-country-content flex w-full">
        <motion.div className="lhs w-2/5" animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 0.3 }}>
        <img src={countryItem.flags[1]} alt={countryItem.name.official} />
        </motion.div>
        <motion.div className="rhs" animate={{ x: -100 }} transition={{ ease: "easeOut", duration: 0.3 }}>
        <div className="text-start content flex flex-col justify-start p-2.5">
            <p className="text-base font-semibold">
              {countryItem.name.official}
            </p>
            <div className="little-content">
              <div className="little-content-item text-xs">
                <span className="content-label font-medium">
                  Population:
                </span>
                <span className="content-value">
                  {countryItem.population}
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
        </motion.div>
       </div>
        {/* <CountryContainer country={countryItem} /> */}
      </div>
    )
  }
}

export default Country
