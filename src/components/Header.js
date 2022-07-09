import { BsFillMoonFill } from 'react-icons/bs';
const Header = ({theme}) => {
  const toggleTheme = () => {
    
  }
  return (
    <div className={`h-20 font-semibold flex justify-between sm:px-40 items-center shadow-md`}>
      <div className='lhs'>
      <h1 className="text-2xl">
        Where in the world?
      </h1>
      </div>
      <button className="flex items-center gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={toggleTheme}>
        <BsFillMoonFill />
        {theme} Mode
      </button>
    </div>
  )
}

export default Header
