'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { At, Password } from '@phosphor-icons/react/dist/ssr';
import { Controller, useForm } from 'react-hook-form';
import { TLoginSchema, loginSchema, useLogin } from '@/features/auth';
import { InputWithIcon } from '@/shared/ui';

export default function SignInPage() {
  const { login } = useLogin();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (data: TLoginSchema) => login(data);

  return (
    <section className="m-auto w-64 py-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Вход</h1>
        <label htmlFor="email">
          Email
          <Controller
            control={control}
            {...register('email')}
            render={({ field: { onChange, value } }) => (
              <InputWithIcon
                icon={At}
                type="email"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </label>
        {errors.email && (
          <p className="text-imperial-400">{errors.email.message}</p>
        )}
        <label htmlFor="password">
          Пароль
          <Controller
            control={control}
            {...register('password')}
            render={({ field: { onChange, value } }) => (
              <InputWithIcon
                icon={Password}
                type="password"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </label>
        {errors.password && (
          <p className="text-imperial-400">{errors.password.message}</p>
        )}
        <button type="submit">Вход</button>
      </form>
    </section>
  );
}
