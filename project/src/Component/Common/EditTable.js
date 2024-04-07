import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateVehicles } from "../../Redux/vehicleSlice"

const EditTable = () => {
  const vehiclesId = useSelector((state) => state.vehicles.vehiclesId) // Corrected state path
  const vehicles = useSelector((state) => state.vehicles.vehicles) // Corrected state path
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const vehiclesData = vehicles.find((vehicle) => vehicle.id === vehiclesId) // Find the correct vehicle by id

  const [updatedData, setUpdatedData] = useState(vehiclesData)

  const handleInputChange = (key, value) => {
    setUpdatedData((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  const handleSave = () => {
    const updatedVehicles = vehicles.map((vehicle) => {
      if (vehicle.id === updatedData.id) {
        return updatedData
      }
      return vehicle
    })
    dispatch(updateVehicles(updatedVehicles)) // Dispatch the updateVehicles action
    navigate(-1)
  }

  const renderInputField = (label, value) => (
    <div className='flex justify-between my-2 hover:bg-slate-200 p-2'>
      <span className='mr-4 capitalize w-96'>{label}</span>
      <span className='text-left w-96'>{value}</span>
      <span className='w-96'>
        <input
          className='border-solid border-2 border-gray px-2'
          type='text'
          placeholder='Type here' // Corrected attribute name
          value={updatedData[label]}
          onChange={(e) => handleInputChange(label, e.target.value)}
        />
      </span>
    </div>
  )

  return (
    <div>
      <h1 className='font-bold text-lg pb-2 mb-4'>Edit information</h1>
      <div className='overflow-auto mb-10'>
        <div className='w-full mb-10'>
          {renderInputField("id", vehiclesData.id)}
          {renderInputField("make", vehiclesData.make)}
          {renderInputField("model", vehiclesData.model)}
          {renderInputField("year", vehiclesData.year)}
          {renderInputField("licensePlate", vehiclesData.licensePlate)}
          {renderInputField("seatingCapacity", vehiclesData.seatingCapacity)}
          {renderInputField("fuelType", vehiclesData.fuelType)}
          {renderInputField("status", vehiclesData.status)}
          <button
            className='bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-5'
            onClick={handleSave}
          >
            Update
          </button>
          <button
            className='bg-blue-50 hover:bg-blue-900 text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={() => {
              navigate(-1)
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditTable
