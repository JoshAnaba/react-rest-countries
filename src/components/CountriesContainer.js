import CountryContainer from './CountryContainer'
import { AiOutlineSearch } from 'react-icons/ai';

const CountriesContainer = ({countries}) => {
  return (
    <div className='pt-16 pb-16 pr-20 pl-20 flex flex-col gap-20'>
     <div className='top'>
      <div className="search-bar flex items-center gap-5">
          <label for="search">
            <AiOutlineSearch className="search-icon" />
          </label>
          <input type="search" id="search" placeholder='Search country' className='border-0 outline-0' />
        </div>
     </div>
      <div className="flex flex-wrap gap-10 justify-between">
        { countries.map((country) => 
          <CountryContainer
            key={country.name}
            country={country}
          />
        )}
    </div>
    </div>
  )
}

export default CountriesContainer
