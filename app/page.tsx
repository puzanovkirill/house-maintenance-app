'use client';
import { useEmployee } from '@/entities/employee';
import { useUser } from '@/entities/user';

export default function Home() {
  const { employee, setEmployee, resetEmployee } = useEmployee();
  const { user, setUser, resetUser } = useUser();

  return (
    <main>
      <div>
        <p>Employee:</p>
        <div>{employee.email}</div>
        <div>{employee.name}</div>
        <div>{employee.speciality}</div>
        <div>{employee.uuid}</div>
        <button
          onClick={() =>
            setEmployee({
              email: 'example@mail.com',
              name: 'Name',
              speciality: 'Worker',
              uuid: '123',
            })
          }
        >
          Create employee
        </button>
        <button onClick={() => resetEmployee()}>Reset employee</button>
      </div>
      <div>
        <p>User:</p>
        <div>{user.email}</div>
        <div>{user.name}</div>
        <button
          onClick={() =>
            setUser({
              email: 'example@mail.com',
              name: 'Name',
            })
          }
        >
          Create user
        </button>
        <button onClick={() => resetUser()}>Reset user</button>
      </div>
    </main>
  );
}
