import { TLoginSchema } from './types';

export const useLogin = () => {
  const login = ({ email, password }: TLoginSchema) =>
    console.log(email, password);

  return { login };
};
