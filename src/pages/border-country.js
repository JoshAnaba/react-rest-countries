import React, { useEffect, useState, useContext } from 'react'
// eslint-disable-next-line no-unused-vars
import { useParams, useLocation, Outlet } from 'react-router-dom'
import MoreDetailsCountryContainer from '../components/MoreDetailsCountryContainer';
import axios from "axios";
import BackBtn from '../components/BackBtn';
// import { useSelector } from 'react-redux';
import { CountriesContext } from '../App'
const baseURL = "https://restcountries.com/v2/";
const BorderCountry = () => {
  const { countries } = useContext(CountriesContext)
  // const counter = useSelector((state) => state.counter)
  const { borderCountry } = useParams()
  const [loading, setLoading] = useState(true);
  const [countryItem, setCountry] = useState(null);
  const [error, setError] = useState(null);
    const getCountryUrl = () => {
      return `${baseURL}name/${borderCountry}`
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
    return (
       <div className="pt-16 pb-16 pr-20 pl-20 flex flex-col gap-10 w-full pb-20">
       <div className="top pb-20">
       <BackBtn />
       </div>
        {
          error 
            ? <div>{error}</div> : loading ? <div>Loading...</div> 
            :
            <MoreDetailsCountryContainer countryItem={countryItem} countries={countries} />
        }
        <Outlet />
      </div>
    )
}

export default BorderCountry
