import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TEmployee } from './types';

export type TEmployeeState = { employee: TEmployee };

const initialState: TEmployeeState = {
  employee: {
    email: '',
    name: '',
    uuid: '',
    speciality: '',
  },
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setEmployee: (state, action: PayloadAction<TEmployee>) => {
      state.employee = action.payload;
    },
    resetEmployee: (state) => {
      state.employee = initialState.employee;
    },
  },
});

export const { setEmployee, resetEmployee } = employeeSlice.actions;

export const employeeReducer = employeeSlice.reducer;
