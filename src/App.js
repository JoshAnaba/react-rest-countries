import './App.css';
import axios from "axios";
import { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import CountriesContainer from './components/CountriesContainer';
import Country from './pages/country';
// import BorderCountry from './pages/border-country';
const baseURL = "https://restcountries.com/v2/";
export const CountriesContext = createContext()
function App () {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchCountries()
  }, [])
  const fetchCountries = async () => {
    await axios({
      url:  `${baseURL}all`,
      method: 'GET'
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
      <CountriesContext.Provider value={{countries}}>
      <div className="App flex flex-col min-h-screen flex w-full">
        <Header />
        <div className='flex min-h-screen justify-center w-full text-center px-20'>
          <Routes>
            <Route path="/"
              element = {
                <>
                    {loading ? <div className="flex flex-col items-center">Loading...</div> : !error ?
                      <CountriesContainer countries={countries} />
                    : <p>{error}</p>}
                </>
              }
            />
           <Route path="/country/:name" element = { <Country /> } />
            {/* <Route path="border-country/:border-name" element = { <BorderCountry /> } /> */}
           {/* </Route> */}
          </Routes>
        </div>
      </div>
      </CountriesContext.Provider>
    </Router>
  );
}

export default App;
