import React, { useState, useEffect } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  const [toggleBtn, setToggleBtn] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setToggleBtn(true)
      } else {
        setToggleBtn(false)
      }
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize)

    // Initial check for window width
    handleResize()

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className=''>
      <Sidebar toggleBtn={toggleBtn}></Sidebar>

      <main className={`${toggleBtn ? "" : "ms-64"} w-[calc(100%-ms-64)]`}>
        <Header toggleBtn={toggleBtn} setToggleBtn={setToggleBtn}></Header>

        <section className='px-5 pt-4 min-h-screen'>{<Outlet />}</section>

        <footer className='bg-slate-200 px-5 '>
          <Footer></Footer>
        </footer>
      </main>
    </div>
  )
}

export default Layout
