import { useNavigate } from "react-router-dom"
import {
  setVehiclesId,
  updateVehicles,
  removeVehicle,
} from "../../Redux/vehicleSlice"
// import { vehiclesId } from "../../Redux/action"
import { useSelector, useDispatch } from "react-redux"

const Table = ({ header, rows, dataType }) => {
  //Vehicle details starts
  const navigate = useNavigate()
  const vehicles = useSelector((state) => state.vehicles.vehicles)
  const dispatch = useDispatch()

  const edit = (id) => {
    dispatch(setVehiclesId(id))
    return navigate("edit")
  }
  const remove = (id) => {
    dispatch(setVehiclesId(id))
    //
  }
  //Vehicle details ends

  return (
    <>
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
                        <button onClick={() => edit(index)}>
                          <i
                            className='fa-solid fa-pen-to-square mr-4 hover:text-blue-600'
                            title='Edit'
                          ></i>
                        </button>
                        <button onClick={() => remove(index)}>
                          <i
                            className='fa-solid fa-trash-can hover:text-red-600'
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
