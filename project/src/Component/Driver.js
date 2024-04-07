import React from "react"
import Table from "./Common/Table"
import db2 from "../Constants/db2.json"

const Driver = () => {
  const header = [
    "ID",
    "Name",
    "Address",
    "Phone",
    "Alternate",
    "Status",
    "Edit",
    "Delete",
  ]
  const rows = db2.drivers
  return (
    <div>
      <h1
        className='font-bold text-lg pb-2 mb-4
'
      >
        Driver Management
      </h1>
      <Table header={header} rows={rows} dataType='driver'></Table>
    </div>
  )
}

export default Driver
