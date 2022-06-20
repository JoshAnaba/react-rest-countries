import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import CountryContainer from '../components/CountryContainer';

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
      <div>
        <CountryContainer country={countryItem} />
      </div>
    )
  }
}

export default Country
