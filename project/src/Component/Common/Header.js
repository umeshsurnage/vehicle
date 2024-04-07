import React from "react"

const Header = ({ toggleBtn, setToggleBtn }) => {
  return (
    <>
      <nav className='bg-blue-950 px-4 py-3 flex justify-between sticky top-0'>
        <div className='flex items-center text-xl'>
          <button>
            <i
              className='text-white font-semibold fa fa-bars mr-4'
              aria-hidden='true'
              onClick={() => setToggleBtn(!toggleBtn)}
            ></i>
          </button>
        </div>
        <div className='flex items-center gap-x-5'>
          <div className='relative md:w-65'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
              <button className='cursor-pointer p-1 focus:outline-none md:text-black'>
                <i className='fa fa-search' aria-hidden='true'></i>
              </button>
            </span>
            <input
              type='text'
              className='w-full px-4 py-1 pl-12 rounded shadow outline-none'
            />
          </div>
          <div className='text-white cursor-pointer relative'>
            <i className='fa fa-bell'></i>
          </div>
          <div className='relative'>
            <button className='text-white group'>
              <i className='fa fa-user-circle' aria-hidden='true'></i>
              <div className='z-10 hidden absolute rounded-lg shadow w-32 group-focus:block top-full mt-3 right-0 bg-blue-900'>
                <ul>
                  <li className='rounded hover:shadow hover:bg-blue-950 py-2 px-4 cursor-pointer'>
                    <button>Profile</button>
                  </li>
                  <li className='rounded hover:shadow hover:bg-blue-950 py-2 px-4 cursor-pointer'>
                    <button>Setting</button>
                  </li>
                  <li className='rounded hover:shadow hover:bg-blue-950 py-2 px-4 cursor-pointer'>
                    <button>Log Out</button>
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
