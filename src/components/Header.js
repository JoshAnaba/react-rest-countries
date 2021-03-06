import { useContext, useEffect } from 'react';
import { BsMoon, BsFillMoonFill } from 'react-icons/bs';
// import { BiSun } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import { setToLS } from '../utils/save-to-ls';
const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  useEffect(()=>{
    console.log(theme)
    setToLS('theme', theme)
  }, [theme])
  return (
    <header className={`${theme}-mode-el h-20 font-semibold flex justify-between md:px-40 px-10 items-center shadow-md z-10`}>
      <div className='lhs'>
      <Link to="/">
        <h1 className="sm:text-2xl cursor-pointer">
          Where in the world?
        </h1>
      </Link>
      </div>
      {
      theme === 'light' ?
        <button className="flex font-normal items-center gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 capitalize" onClick={toggleTheme}>
          <BsMoon />
          Dark Mode
        </button> :
        <button className="flex font-normal items-center gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 capitalize" onClick={toggleTheme}>
          <BsFillMoonFill />
          Light Mode
        </button>  
      }
      </header>
  )
}

export default Header
