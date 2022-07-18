import React, { useEffect } from 'react'

const BackToTop = () => {
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
    <div id="back-to-top" className={`back-to-top`} onClick={goBackToTop}>
      <span className="back-to-top-text">Back to Top</span>
      <span className="material-icons"> arrow_upward </span>
    </div>
  )
}

export default BackToTop
