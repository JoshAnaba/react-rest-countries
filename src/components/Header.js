import { useContext } from 'react';
import { BsFillMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div className={`${theme}-mode-el h-20 font-semibold flex justify-between md:px-40 px-10 items-center shadow-md z-10`}>
      <div className='lhs'>
      <Link to="/">
        <h1 className="sm:text-2xl cursor-pointer">
          Where in the world?
        </h1>
      </Link>
      </div>
      <button className="flex items-center gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 capitalize" onClick={toggleTheme}>
        <BsFillMoonFill />
        {theme} Mode
      </button>
    </div>
  )
}

export default Header
