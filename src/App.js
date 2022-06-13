import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useAxios } from "use-axios-client";
import CountryContainer from "./components/CountryContainer";
import axiosClient from './utils/axios';
import Header from "./components/Header";
import CountriesContainer from './components/CountriesContainer';

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
    return <div className='App flex justify-between align-center'>
      {!countries && error ? <p>{error}</p> : 'Loading...'}
    </div>
  }
  return (
      <div className="App">
      <Header />
      <CountriesContainer countries={countries} />
      </div>
  );
}

export default App;
