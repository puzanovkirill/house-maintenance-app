import { configureStore } from '@reduxjs/toolkit';
import { employeeReducer } from '@/entities/employee/model';
import { userReducer } from '@/entities/user/model';

export const store = configureStore({
  reducer: {
    user: userReducer,
    employee: employeeReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ReturnType<typeof store.dispatch>;
