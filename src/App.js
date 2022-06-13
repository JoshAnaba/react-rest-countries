import './App.css';
import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';
import CountryContainer from "./components/CountryContainer";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const baseURL = "https://restcountries.com/v2/";

function App() {
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchCountries()
  }, [])
  const  fetchCountries = async () => {
    await axios({
      url:  `${baseURL}all`,
      method: 'GET',
    })
      .then((onfulfilled) => {
        setCountries(onfulfilled.data)
        console.log(onfulfilled.data)
      })
      .catch((err) => {
        const errorMsg = err.response?.data?.message ? err.response?.data?.message : err.message
        setError(errorMsg)
      })
      .finally(() => {
        // this.loading = false
      })
  }
  if (!countries) {
    return <div className='App flex justify-space-between align-center'>
      {!countries && error ? <p>{error}</p> : 'Loading...'}
    </div>
  }
  return (
      <div className="flex flex-wrap gap-10 justify-space-between">
      { countries.map((country) => 
        <CountryContainer
          key={country.name}
          country={country}
        />
      )}
    </div>
  );
}

export default App;
