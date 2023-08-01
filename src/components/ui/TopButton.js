import { useState, useEffect } from "react"

export const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top:0,
      behavior:'smooth'
    })
  }

  useEffect(() => {
    const showButtonClick = () => {
      if(window.scrollY > 20) {
        setShowButton(true)
      }else{
        setShowButton(false)
      }
    }
    window.addEventListener("scroll", showButtonClick)
    return () => {
      window.removeEventListener("scroll", showButtonClick)
    }
  },[])

  return (
    <>
      {showButton &&
        <button onClick={scrollToTop} type="button" id="topBtn" className={`btn-top`} style={{ display: `${showButton ? 'block' : 'none'}`}}>
          <svg className={`quick_btn`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20.25V3.75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M5.25 10.5L12 3.75L18.75 10.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      }
    </>
  )
}