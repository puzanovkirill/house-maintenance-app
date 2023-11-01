import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Это поле обязательно для заполнения')
    .email('Вы ввели некорректный email'),
  password: z.string().min(3, 'Это поле должно содержать минимум 3 символа'),
});
