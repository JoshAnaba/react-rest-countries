import React, { useEffect, useContext } from 'react'
import { ThemeContext } from '../App'

const BackToTop = () => {
  const { theme } = useContext(ThemeContext);
  useEffect(()=>{
    const mybutton = document.getElementById('back-to-top')
    window.onscroll = () => scrollFunction()
    function scrollFunction () {
      ((document.body.scrollTop > 500) || (document.documentElement.scrollTop > 500))
        ? mybutton.style.display = 'flex'
        : mybutton.style.display = 'none'
    }
  })
  const goBackToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <div id="back-to-top" className={`${theme}-mode-el back-to-top`} onClick={goBackToTop}>
      <span className="back-to-top-text">Back to Top</span>
      <span className="material-icons"> arrow_upward </span>
    </div>
  )
}

export default BackToTop
