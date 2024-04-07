import { createSlice } from "@reduxjs/toolkit"
import vehiclesData from "./data"

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehiclesId: [],
    vehicles: vehiclesData,
  },
  reducers: {
    setVehiclesId: (state, action) => {
      state.vehiclesId = action.payload
    },
    updateVehicles: (state, action) => {
      state.vehicles = action.payload
    },
    removeVehicle: (state, action) => {
      const vehicleIdToRemove = action.payload
      state.vehicles = state.vehicles.filter(
        (vehicle) => vehicle.id !== vehicleIdToRemove
      )
    },
  },
})

export const { setVehiclesId, updateVehicles, removeVehicle } =
  vehicleSlice.actions

export default vehicleSlice.reducer

// import { createSlice } from "@reduxjs/toolkit"

// const vehicleSlice = createSlice({
//   name: "vehicles",
//   initialState: {
//     vehiclesId: [],
//     vehiclesUpdate: [],
//     vehicles: [
//       {
//         id: 1,
//         make: "Toyota",
//         model: "Camry",
//         year: 2020,
//         licensePlate: "ABC123",
//         seatingCapacity: 5,
//         fuelType: "Petrol",
//         status: "Available",
//         action: "",
//       },
//       {
//         id: 2,
//         make: "Ford",
//         model: "F-150",
//         year: 2019,
//         licensePlate: "DEF456",
//         seatingCapacity: 6,
//         fuelType: "Diesel",
//         status: "Available",
//         action: "",
//       },
//       {
//         id: 3,
//         make: "Honda",
//         model: "Civic",
//         year: 2021,
//         licensePlate: "GHI789",
//         seatingCapacity: 5,
//         fuelType: "Petrol",
//         status: "Available",
//         action: "",
//       },
//       {
//         id: 4,
//         make: "Chevrolet",
//         model: "Silverado",
//         year: 2022,
//         licensePlate: "JKL012",
//         seatingCapacity: 6,
//         fuelType: "Gasoline",
//         status: "Available",
//         action: "",
//       },
//       {
//         id: 5,
//         make: "Tesla",
//         model: "Model 3",
//         year: 2023,
//         licensePlate: "MNO345",
//         seatingCapacity: 5,
//         fuelType: "Electric",
//         status: "Available",
//         action: "",
//       },
//       {
//         id: 6,
//         make: "Nissan",
//         model: "Rogue",
//         year: 2020,
//         licensePlate: "PQR678",
//         seatingCapacity: 5,
//         fuelType: "Petrol",
//         status: "Available",
//         action: "",
//       },
//       {
//         id: 7,
//         make: "BMW",
//         model: "X5",
//         year: 2021,
//         licensePlate: "STU901",
//         seatingCapacity: 7,
//         fuelType: "Petrol",
//         status: "Available",
//         action: "",
//       },
//       {
//         id: 8,
//         make: "Audi",
//         model: "A6",
//         year: 2019,
//         licensePlate: "VWX234",
//         seatingCapacity: 5,
//         fuelType: "Petrol",
//         status: "Available",
//         action: "",
//       },
//       {
//         id: 9,
//         make: "Mercedes-Benz",
//         model: "GLC",
//         year: 2020,
//         licensePlate: "YZA567",
//         seatingCapacity: 5,
//         fuelType: "Diesel",
//         status: "Available",
//         action: "",
//       },
//       {
//         id: 10,
//         make: "Volkswagen",
//         model: "Jetta",
//         year: 2022,
//         licensePlate: "BCD890",
//         seatingCapacity: 5,
//         fuelType: "Petrol",
//         status: "Available",
//         action: "",
//       },
//     ],
//   },
//   reducers: {
//     vehiclesId: (state, action) => {
//       state.vehiclesId = action.payload
//     },
//     vehiclesUpdate: (state, action) => {
//       state.vehicles = action.payload
//     },
//     vehiclesRemove: (state, action) => {
//       const vehicleIdToRemove = action.payload
//       state.vehicles = state.vehicles.filter(
//         (vehicle) => vehicle.id !== vehicleIdToRemove
//       )
//     },
//   },
// })

// export const { vehiclesId, vehiclesUpdate, vehiclesRemove } =
//   vehicleSlice.actions

// export const vehicleReducer = vehicleSlice.reducer
