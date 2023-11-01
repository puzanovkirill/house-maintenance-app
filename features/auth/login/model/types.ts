import { z } from 'zod';
import { loginSchema } from './schemas';

export type TLoginSchema = z.infer<typeof loginSchema>;
