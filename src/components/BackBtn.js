import React from 'react'

const BackBtn = () => {
  return (
    <button className="back-btn flex gap-2 p-2.5 pr-5 pl-5 shadow-md cursor-pointer rounded" onClick={()=>(window.history.back())}>
      <span className="material-icons-outlined">west</span>
      <span>Back</span>
    </button>
  )
}

export default BackBtn
