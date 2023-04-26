import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: InitialStateType = {
  loading: false,
  cars: [],
  selectedCar: {},
  error: '',
  usedCarFilters:{
    priceRange: {
      min: 50000,
      max: 500000,
    }
  }
}

export const fetchUsedCars = createAsyncThunk('car/fetchUsedCars', async () => {
  const resp = await axios.get('http://localhost:3500/used-cars')
  return resp.data;
});

export const fetchCarDetail = createAsyncThunk('car/carDetail',async (id: string) => {
  const resp = await axios.get(`http://localhost:3500/used-cars/${id}`)
  return resp.data;
})

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    changeFilterMaxPrice(state, action: PayloadAction<number>){
      state.usedCarFilters.priceRange.max = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsedCars.pending, (state) => {state.loading = true});
    builder.addCase(fetchUsedCars.fulfilled, (state, action: PayloadAction<UsedCarType[]>) => {
      state.cars = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsedCars.rejected, (state, action) => {
      state.loading = false;
      state.cars = [];
      state.error = action.error.message
    });

    builder.addCase(fetchCarDetail.pending, (state) => {state.loading = true});
    builder.addCase(fetchCarDetail.fulfilled, (state, action: PayloadAction<UsedCarType[]>) => {
      state.selectedCar = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCarDetail.rejected, (state, action) => {
      state.loading = false;
      state.cars = [];
      state.error = action.error.message
    })
  }
});

export const {changeFilterMaxPrice} = carSlice.actions;
export default carSlice.reducer;

type InitialStateType = {
  loading: boolean;
  cars: UsedCarType[];
  selectedCar: UsedCarType | any,
  error: string | undefined;
  usedCarFilters: {
    priceRange: {
      min: number;
      max: number
    }
  }
}

export type UsedCarType = {
  id: number;
  name: string;
  price: string;
  km_driven: string;
  fuel: string;
  transmission: string;
  mfg_year: string;
  photos: string[];
}

