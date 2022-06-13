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
  const [loading, setLoading] = useState(true);
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
      })
      .catch((err) => {
        const errorMsg = err.response?.data?.message ? err.response?.data?.message : err.message
        setError(errorMsg)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
      <div className="App flex flex-col min-h-screen flex w-full">
      <Header />
        <div className='flex min-h-screen justify-center items-center w-full text-center'>
        {loading ? <div className="flex flex-col items-center">Loading...</div> : !error ? <CountriesContainer countries={countries} /> : <p>{error}</p>}
        </div>
      </div>
  );
}

export default App;
