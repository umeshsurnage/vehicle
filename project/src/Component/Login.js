import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const userName = "1"
const userPass = "1"

const Login = ({ setCurrent }) => {
  const navigate = useNavigate()
  const [login, setLogin] = useState(0)

  const checkLogin = (e) => {
    e.preventDefault()
    if (login.loginName === userName && login.password === userPass) {
      setCurrent("umesh")
      navigate("/")
    } else {
      alert("Check username and password")
    }
  }

  return (
    <div className='login-wrapp bg-cover bg-center h-screen flex justify-center content-center items-center'>
      <div className='flex justify-center items-center h-screen'>
        <div className='shadow-xl inset-0 backdrop-blur-sm shadow-black rounded-md w-full sm:w-auto sm:max-w-xs lg:max-w-md xl:max-w-lg p-4 '>
          <div className=''>
            <h1 className='text-lg font-bold text-center border-b-4 pb-3'>
              Login Form
            </h1>
            <div className='w-full max-w-xs'>
              <form className='rounded px-8 pt-6 pb-8' onSubmit={checkLogin}>
                <div class='mb-4'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    for='username'
                  >
                    Username
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='username'
                    type='text'
                    placeholder='Username'
                    name='userName'
                    onChange={(e) => {
                      return setLogin((pre) => ({
                        ...pre,
                        loginName: e.target.value,
                      }))
                    }}
                  />
                </div>
                <div class='mb-6'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    for='password'
                  >
                    Password
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                    id='password'
                    type='password'
                    placeholder='******************'
                    // value={pass}
                    name='userPass'
                    // onChange={handlePass}
                    onChange={(e) =>
                      setLogin((pre) => ({ ...pre, password: e.target.value }))
                    }
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <button
                    className='bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='submit'
                  >
                    Sign In
                  </button>
                  <button
                    className='inline-block align-baseline font-bold text-sm text-yellow-400 hover:text-blue-800'
                    type='button'
                  >
                    Forgot Password?
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
