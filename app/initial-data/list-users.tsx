'use client';

import { User, getUsers } from '../utils/api-requests' // '@/utils/api-requests';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';

//export default function ListUsers({ users }: { users: User[] }) {
export default function ListUsers() {
  const [count, setCount] = React.useState(0);

  const { data } = useQuery({
    queryKey: ['initial-users'],
    queryFn: () => getUsers(),
    // initialData: users,
    staleTime: 5 * 1000,
  });

  return (
    <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>

      {
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: 20,
          }}
        >
          {/* <pre>{JSON.stringify(data  , null, 2)}</pre> */}
          {data && data.map((user: any) => (
            <h3>{user.id} {user.name} {user.email}</h3>
          ))}
        </div>
      }
    </main>
  );
}