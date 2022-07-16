import './App.css';
import axios from "axios";
import { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import CountriesContainer from './components/CountriesContainer';
import Country from './pages/country';
import BackToTop from './components/BackToTop';
const baseURL = "https://restcountries.com/v2/";
export const CountriesContext = createContext()
export const ThemeContext = createContext('light');
function App () {
  // for test purposes
  const [theme, setTheme] = useState('Light')
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
  const toggleTheme = () => {
    setTheme(theme === 'Light' ? 'Dark' : 'Light')
  }
  return (
      <Router>
      <CountriesContext.Provider value={{countries}}>
        <div className="App flex flex-col min-h-screen flex w-full">
          <Header toggleTheme={toggleTheme} theme={theme}/>
          <div className='flex min-h-screen justify-center w-full text-center md:px-20 px-10 py-10'>
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
        </div>
      </CountriesContext.Provider>
    </Router>
  );
}

export default App;
