import React from 'react'

const LoadMoreBtn = ({truncatedNumber, filteredCountries, loadMore}) => {
  return (
    <>   
      <button className="load-more shadow-md p-3 rounded-full w-1/5 m-auto" disabled={truncatedNumber >= filteredCountries.length} onClick={loadMore}>Load More</button>
    </>
  )
}

export default LoadMoreBtn
