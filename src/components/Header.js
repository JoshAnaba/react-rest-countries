import { BsFillMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Header = ({theme, toggleTheme}) => {
  return (
    <div className={`h-20 font-semibold flex justify-between md:px-40 px-10 items-center shadow-md`}>
      <div className='lhs'>
      <Link to="/">
        <h1 className="sm:text-2xl cursor-pointer">
          Where in the world?
        </h1>
      </Link>
      </div>
      <button className="flex items-center gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={toggleTheme}>
        <BsFillMoonFill />
        {theme} Mode
      </button>
    </div>
  )
}

export default Header
