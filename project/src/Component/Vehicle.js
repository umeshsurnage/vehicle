import React from "react"
import Table from "./Common/Table"
import db2 from "../Constants/db2.json"

const Vehicle = () => {
  const header = [
    "ID",
    "Name",
    "Model",
    "Year",
    "License",
    "Capacity",
    "Type",
    "Status",
    "Action",
  ]
  const rows = db2.vehicles
  return (
    <div>
      <h1 className='font-bold text-lg pb-2 mb-4'>Vahicle Management</h1>
      <Table header={header} rows={rows} dataType='vehicle'></Table>
    </div>
  )
}

export default Vehicle
