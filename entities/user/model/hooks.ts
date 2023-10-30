import { useDispatch, useSelector } from 'react-redux';
import { resetUser as resetUserSlice, setUser as setUserSlice } from './slices';
import { TUser } from './types';
import { RootState } from '@/global/store';

export const useUser = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const setUser = (payload: TUser) => {
    dispatch(setUserSlice(payload));
  };

  const resetUser = () => {
    dispatch(resetUserSlice());
  };

  return { user, setUser, resetUser };
};
