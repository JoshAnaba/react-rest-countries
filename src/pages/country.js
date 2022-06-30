import React, { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { useParams, useLocation } from 'react-router-dom'
import MoreDetailsCountryContainer from '../components/MoreDetailsCountryContainer';
// import axios from "axios";
// import CountryContainer from '../components/CountryContainer';
import BackBtn from '../components/BackBtn';
const Country = () => {
  const location = useLocation()
  console.log(location.state.country)
  // const { name } = useParams()
  const [loading, setLoading] = useState(true);
  const [countryItem, setCountryItem] = useState(null);
    const fetchCountry = () => {
      setCountryItem(location.state.country)
      setLoading(false)
    }

  useEffect(() => {
      fetchCountry()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (loading) {
    return (
      <div>
        <div className="flex flex-col items-center">Loading...</div>
      </div>
    )
  } else if (countryItem){
    console.log(countryItem)
    return (
      <div className="pt-16 pb-16 pr-20 pl-20 flex flex-col gap-10 w-full pb-20">
       <div className="top pb-20">
       <BackBtn />
       </div>
      <MoreDetailsCountryContainer countryItem={countryItem} />
        {/* <CountryContainer country={countryItem} /> */}
      </div>
    )
  }
}

export default Country
