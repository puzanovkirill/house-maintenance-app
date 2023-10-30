'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/global/store';

type TReduxProviderProps = {
  children: ReactNode;
};

export default function ReduxProvider({ children }: TReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
