import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useAxios } from "use-axios-client";
// import axiosClient from './utils/axios';
import Header from "./components/Header";
import CountriesContainer from './components/CountriesContainer';
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
      <Router>
        <div className="App flex flex-col min-h-screen flex w-full">
        <Header />
        <Routes>
          <Route path="/" element = {
            <>
              <div className='flex min-h-screen justify-center items-center w-full text-center'>
                {loading ? <div className="flex flex-col items-center">Loading...</div> : !error ? <CountriesContainer countries={countries} /> : <p>{error}</p>}
                </div>
              </>
            } 
          />
        </Routes>
        </div>
      </Router>
  );
}

export default App;
