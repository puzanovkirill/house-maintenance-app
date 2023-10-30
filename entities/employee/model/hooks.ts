import { useDispatch, useSelector } from 'react-redux';
import {
  resetEmployee as resetEmployeeSlice,
  setEmployee as setEmployeeSlice,
} from './slices';
import { TEmployee } from './types';
import { RootState } from '@/global/store';

export const useEmployee = () => {
  const { employee } = useSelector((state: RootState) => state.employee);
  const dispatch = useDispatch();

  const setEmployee = (payload: TEmployee) => {
    dispatch(setEmployeeSlice(payload));
  };

  const resetEmployee = () => {
    dispatch(resetEmployeeSlice());
  };

  return { employee, setEmployee, resetEmployee };
};
