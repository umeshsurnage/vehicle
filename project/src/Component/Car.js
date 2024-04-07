import React from "react"
import Table from "./Common/Table"
import db2 from "../Constants/db2.json"

const Car = () => {
  const header = [
    "ID",
    "Model",
    "Number",
    "Driver",
    "Location",
    "Destination",
    "From",
    "To",
    "User",
    "Payment",
  ]
  const rows = db2.bookings
  return (
    <div>
      <h1
        className='font-bold text-lg pb-2 mb-4
'
      >
        Booking details
      </h1>
      <Table header={header} rows={rows} dataType='booking'></Table>
    </div>
  )
}

export default Car
