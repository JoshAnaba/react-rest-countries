import React from 'react'

const FilterByRegion = ({region, filterBy, filterOpen, setFilterOpen, filterItems}) => {
  return (
    <>
      <div className="filters relative cursor-pointer items-center w-44">
        <button className="flex items-center gap-5 min-w-full justify-between transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-md p-3.5 rounded-md" onClick={()=>{setFilterOpen(!filterOpen)}}>
          <span className="">{region ? region : 'Filter by Region'}</span>
          <span className="material-icons">{!filterOpen ? 'expand_more': 'expand_less'}</span>
        </button>
        {filterOpen && <div className="filter-item-ctn flex flex-col absolute top-14 shadow-md rounded-md w-full right-0 left-0 bg-white pt-2 pb-2">
        <button className={`filter-item text-start p-1 pr-3.5 pl-3.5 cursor-pointer pl-2 pr-2 ${region === '' && 'active-region'}`} onClick={()=>{filterBy('all')}}>All</button>
        {filterItems.sort((a, b)=>{
          const sort = a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          return sort
        }).map((item, index) => {
          return (<button key={index} className={`filter-item text-start p-1 pr-3.5 pl-3.5 cursor-pointer pl-2 pr-2 ${region === item.name && 'active-region'}`} onClick={()=>{filterBy(item.name)}}>{item.text}</button>)
        })}
        </div> }
      </div>
    </>
  )
}

export default FilterByRegion
