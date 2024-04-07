import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import EditTable from "./EditTable"
import { editVehicles } from "../../Redux/vehicleSlice"
import { useSelector, useDispatch } from "react-redux"

const Table = ({ header, rows, dataType }) => {
  //Vehicle details starts

  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  const navigate = useNavigate()

  const vehicles = useSelector((state) => state.vehicleReducer.vehicles)
  const dispatch = useDispatch()

  const edit = (id) => {
    // togglePopup()
    // console.log(vehicles[id - 1])
    dispatch(editVehicles(id))

    return navigate("edit")
  }
  const remove = () => {
    //
  }
  //Vehicle details ends

  return (
    <>
      <div className='relative'>
        {/* Button to toggle the popup */}
        {/* <button
          onClick={togglePopup}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Open Popup
        </button> */}

        {/* Popup box */}
        {isOpen && (
          <div className='fixed z-10 inset-0 overflow-y-auto'>
            <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
              <div
                className='fixed inset-0 transition-opacity'
                aria-hidden='true'
              >
                <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
              </div>
              <span
                className='hidden sm:inline-block sm:align-middle sm:h-screen'
                aria-hidden='true'
              >
                &#8203;
              </span>
              <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                {/* Popup content */}
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className=''>
                    <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left overflow-auto'>
                      <h3
                        className='text-lg leading-6 font-medium text-gray-900'
                        id='modal-title'
                      >
                        Edit information
                        <hr />
                      </h3>
                      <div className='mt-4 flex '>
                        <div className='w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4'>
                          {header.map((header, index) => {
                            return (
                              <div key={index} className='p-2'>
                                {header}
                              </div>
                            )
                          })}
                        </div>
                        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-4'>
                          <div className='p-2 flex justify-between'>
                            <label className='mr-2'>{vehicles.id}</label>
                            <input
                              type='text'
                              name=''
                              id=''
                              className='border-2 border-black'
                            />
                          </div>
                          <div className='p-2 flex justify-between'>
                            <label className='mr-2'>{vehicles.Name}</label>
                            <input
                              type='text'
                              name=''
                              id=''
                              className='border-2 border-black'
                            />
                          </div>
                          <div className='p-2 flex justify-between'>
                            <label className='mr-2'>{vehicles.Model}</label>
                            <input
                              type='text'
                              name=''
                              id=''
                              className='border-2 border-black'
                            />
                          </div>
                          {/* {vehicles.map((row, index) => {
                            return (
                              <div className='p-2 flex justify-between'>
                                <label className='mr-2'>{row.id}</label>
                                <input
                                  type='text'
                                  name=''
                                  id=''
                                  className='border-2 border-black'
                                />
                              </div>
                            )
                          })} */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                    <button
                      onClick={togglePopup}
                      type='button'
                      className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm'
                    >
                      Close
                    </button>
                  </div>
                </div>
                {/* Close button */}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='overflow-auto'>
        <table className='text-left w-full '>
          <thead className='bg-slate-300'>
            <tr>
              {header.map((header, index) => {
                return (
                  <th key={index} className='p-2'>
                    {header}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {/* Driver details */}
            {rows.map((row, index) => {
              return (
                <tr key={row.id} className='hover:bg-slate-200  border'>
                  {dataType === "driver" && (
                    <>
                      <td className='p-2'>{row.id}</td>
                      <td className='p-2'>
                        {row.pic} {row.name}
                      </td>
                      <td className='p-2'>{row.address}</td>
                      <td className='p-2'>{row.phoneNumber}</td>
                      <td className='p-2'>{row.alternatePhoneNumber}</td>
                      <td className='p-2'>{row.status}</td>
                      <td className='p-2'>{row.edit}</td>
                      <td className='p-2'>{row.delete}</td>
                    </>
                  )}
                </tr>
              )
            })}

            {/* Vehicle details */}
            {vehicles.map((row, index) => {
              return (
                <tr key={row.id} className='hover:bg-slate-200  border'>
                  {dataType === "vehicle" && (
                    <>
                      <td className='p-2'>{row.id}</td>
                      <td className='p-2'>
                        {row.pic} {row.make}
                      </td>
                      <td className='p-2'>{row.model}</td>
                      <td className='p-2'>{row.year}</td>
                      <td className='p-2'>{row.licensePlate}</td>
                      <td className='p-2'>{row.seatingCapacity}</td>
                      <td className='p-2'>{row.fuelType}</td>
                      <td className='p-2'>{row.status}</td>
                      <td className='p-2'>
                        <button onClick={() => edit(row.id)}>
                          <i
                            class='fa-solid fa-pen-to-square mr-4 hover:text-blue-600'
                            title='Edit'
                          ></i>
                        </button>
                        <button onClick={remove}>
                          <i
                            class='fa-solid fa-trash-can hover:text-red-600'
                            title='Delete'
                          ></i>
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              )
            })}

            {/* Booking details */}
            {rows.map((row, index) => {
              return (
                <tr key={row.id} className='hover:bg-slate-200  border'>
                  {dataType === "booking" && (
                    <>
                      <td className='p-2'>{row.id}</td>
                      <td className='p-2'>{row.vehicleModel}</td>
                      <td className='p-2'>{row.vehicleNumber}</td>
                      <td className='p-2'>{row.driverName}</td>
                      <td className='p-2'>{row.startLocation}</td>
                      <td className='p-2'>{row.endLocation}</td>
                      <td className='p-2'>{row.startDate}</td>
                      <td className='p-2'>{row.endDate}</td>
                      <td className='p-2'>{row.customerName}</td>
                      <td className='p-2'>{row.paymentStatus}</td>
                    </>
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
