import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useAxios } from "use-axios-client";
// import axiosClient from './utils/axios';
import Header from "./components/Header";
import CountriesContainer from './components/CountriesContainer';
import Country from './pages/country';
const baseURL = "https://restcountries.com/v3/";
function App() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchCountries()
  }, [])
  const fetchCountries = async () => {
    await axios({
      url:  `${baseURL}all`,
      method: 'GET',
    })
      .then((onfulfilled) => {
        // console.log(onfulfilled.data)
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
              <div className='flex min-h-screen justify-center w-full text-center'>
        <Routes>
          <Route path="/" element = {
            <>
                {loading ? <div className="flex flex-col items-center">Loading...</div> : !error ? <CountriesContainer countries={countries} /> : <p>{error}</p>}
              </>
            } 
          />
          <Route path="/country/:name" element = { <Country /> } />
        </Routes>
                </div>
        </div>
      </Router>
  );
}

export default App;
