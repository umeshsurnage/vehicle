import { configureStore } from "@reduxjs/toolkit"
import vehicleReducer from "./vehicleSlice"

const store = configureStore({
  reducer: {
    vehicles: vehicleReducer,
  },
})

export default store
