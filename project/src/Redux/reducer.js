import { createReducer } from "@reduxjs/toolkit"
import { setVehiclesId, updateVehicles, removeVehicle } from "./action"
import vehiclesData from "./data"

const initialState = {
  vehiclesId: [],
  vehicles: vehiclesData,
}

const vehicleReducer = createReducer(initialState, {
  [setVehiclesId]: (state, action) => {
    state.vehiclesId = action.payload
  },
  [updateVehicles]: (state, action) => {
    state.vehicles = action.payload
  },
  [removeVehicle]: (state, action) => {
    const vehicleIdToRemove = action.payload
    state.vehicles = state.vehicles.filter(
      (vehicle) => vehicle.id !== vehicleIdToRemove
    )
  },
})

export default vehicleReducer
