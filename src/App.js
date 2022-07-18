import './App.css';
import axios from "axios";
import { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import CountriesContainer from './components/CountriesContainer';
import Country from './pages/country';
import BackToTop from './components/BackToTop';
export const ThemeContext = createContext();
const baseURL = "https://restcountries.com/v2/";
export const CountriesContext = createContext()
function App () {
  const [theme, setTheme] = useState('light')
  const defaultContext = {
  theme,
  setTheme
  };
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
    <CountriesContext.Provider value={{countries}}>
      <ThemeContext.Provider value={defaultContext}>
        <Router>
          <div className="App flex flex-col min-h-screen flex w-full">
            <Header />
            <div className={`${theme}-mode-bg flex min-h-screen justify-center w-full text-center md:px-20 px-10 py-10`}>
              <Routes>
                <Route path="/"
                  element = {
                    <>
                        {loading ? <div className="flex items-center min-h-screen">Loading...</div> : !error ?
                          <CountriesContainer countries={countries} />
                        : <p>{error}</p>}
                    </>
                  }
                />
                <Route path="/country/:name" element = { <Country /> } />
              </Routes>
            </div>
            <BackToTop />
          </div>
        </Router>
      </ThemeContext.Provider>
    </CountriesContext.Provider>
  );
}

export default App;
