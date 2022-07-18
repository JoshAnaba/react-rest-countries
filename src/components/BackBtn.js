import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const BackBtn = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <button className={`${theme}-mode-el back-btn flex gap-2 p-2.5 pr-5 pl-5 shadow-md cursor-pointer rounded-md`} onClick={()=>(window.history.back())}>
      <span className="material-icons-outlined">west</span>
      <span>Back</span>
    </button>
  )
}

export default BackBtn
