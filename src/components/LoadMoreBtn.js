import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const LoadMoreBtn = ({truncatedNumber, filteredCountries, loadMore}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>   
      <button className={`${theme}-mode-el load-more shadow-md p-3 rounded-lg md:w-2/5 m-auto`} disabled={truncatedNumber >= filteredCountries.length} onClick={loadMore}>Load More</button>
    </>
  )
}

export default LoadMoreBtn
