import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Component/Login"
import Dashboard from "./Component/Dashboard"
import Car from "./Component/Car"
import Driver from "./Component/Driver"
import Vehicle from "./Component/Vehicle"
import Layout from "./Component/Common/Layout"
import EditTable from "./Component/Common/EditTable"
import NotFound from "./Component/NotFound"

import Demo from "./Component/Demo"

const AppRoutes = () => {
  const [current, setCurrent] = useState()
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Admin />}></Route> */}
          <Route
            path='login'
            element={<Login setCurrent={setCurrent} />}
          ></Route>

          {/* {current && (
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          )} */}
          <Route element={<Layout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='vehicle-management' element={<Vehicle />} />
            <Route path='vehicle-management/edit' element={<EditTable />} />
            <Route path='driver-management' element={<Driver />} />
            <Route path='rent-car' element={<Car />} />
          </Route>

          <Route path='*' element={<NotFound></NotFound>} />

          <Route path='demo' element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
