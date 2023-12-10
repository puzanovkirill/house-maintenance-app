import { logger } from '@/shared/api';
import { TLoginSchema } from './types';

export const useLogin = () => {
  const login = ({ email, password }: TLoginSchema) =>
    logger.log(email, password);

  return { login };
};
