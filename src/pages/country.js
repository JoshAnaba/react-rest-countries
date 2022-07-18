import React, { useEffect, useState, useContext } from 'react'
// eslint-disable-next-line no-unused-vars
import { useParams, useLocation } from 'react-router-dom'
import MoreDetailsCountryContainer from '../components/MoreDetailsCountryContainer';
import axios from "axios";
import BackBtn from '../components/BackBtn';
// import { useSelector } from 'react-redux';
import { CountriesContext, ThemeContext } from '../App'
const baseURL = "https://restcountries.com/v2/";
const Country = () => {
  const { countries } = useContext(CountriesContext)
  const { theme } = useContext(ThemeContext)
  // const counter = useSelector((state) => state.counter)
  let { name } = useParams()
  const [loading, setLoading] = useState(true);
  const [countryItem, setCountry] = useState(null);
  const [error, setError] = useState(null);
    const getCountryUrl = () => {
      return `${baseURL}name/${name}`
    }
    const fetchCountry = async () => {
      setCountry({})
      setLoading(true)
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
    }, [name])
    return (
      <div className={`md:py-16 md:px-20 pb-40 flex flex-col gap-10 w-full`}>
        <div className="top md:pb-20">
          <BackBtn />
        </div>
        {
          error 
            ? <div>{error}</div> : loading ? <div>Loading...</div> 
            :
            <MoreDetailsCountryContainer countryItem={countryItem} countries={countries} />
        }
      </div>
    )
}

export default Country
