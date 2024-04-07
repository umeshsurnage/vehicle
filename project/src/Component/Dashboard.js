import React from "react"

const Dashboard = () => {
  return (
    <>
      <h1
        className='font-bold text-lg pb-2 mb-4
      '
      >
        Dashboard
      </h1>
      <div className=''>
        <div className='flex flex-wrap'>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4'>
            <div className='bg- shadow-md rounded-lg p-6'>
              <div className='flex items-center justify-between mb-4'>
                <div className='text-xl font-bold text-gray-800'>
                  Registered Drivers
                </div>
                <div className='bg-blue-500 text-white rounded-full text-xl py-2 px-3'>
                  <i class='fa-solid fa-users'></i>
                </div>
              </div>
              <div className='text-3xl font-bold text-gray-800'>100</div>
            </div>
          </div>

          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4'>
            <div className='bg-white shadow-md rounded-lg p-6'>
              <div className='flex items-center justify-between mb-4'>
                <div className='text-xl font-bold text-gray-800'>
                  Available Vehicles
                </div>
                <div className='bg-green-500 text-white rounded-full text-xl py-2 px-3'>
                  <i class='fa-solid fa-car-side'></i>
                </div>
              </div>
              <div className='text-3xl font-bold text-gray-800'>50</div>
            </div>
          </div>

          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4'>
            <div className='bg-white shadow-md rounded-lg p-6'>
              <div className='flex items-center justify-between mb-4'>
                <div className='text-xl font-bold text-gray-800'>
                  Active Bookings
                </div>
                <div className='bg-yellow-500 text-white rounded-full text-xl py-2 px-4'>
                  <i class='fa-solid fa-clipboard-check '></i>
                </div>
              </div>
              <div className='text-3xl font-bold text-gray-800'>20</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
