import React from "react"
import { SIDEBAR_LINKS } from "../../Constants/Navigation"
import { useNavigate } from "react-router-dom"

const Sidebar = ({ toggleBtn }) => {
  const navigate = useNavigate()
  return (
    <div
      className={`${
        toggleBtn ? "hidden" : "block"
      } w-64 bg-blue-950 fixed h-full px-4 `}
    >
      <div className='my-2 mb-4'>
        <h1 className=' text-white font-bold text-3xl text-center '>
          <span className='text-yellow-400'>Ride</span>Ready
        </h1>
      </div>
      <hr />
      <ul className='mt-3 text-white font-bold'>
        {SIDEBAR_LINKS.map((link, index) => {
          return (
            <li
              key={index}
              className='mb-2 rounded hover:shadow hover:bg-blue-900 py-2 px-4 cursor-pointer'
              onClick={() => navigate(link.path)}
            >
              <span className='inline-block w-6 h-6 mr-2'>
                <i className={link.icon}></i>
              </span>
              <span>{link.label}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
