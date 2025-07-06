// 'use client';
import  getUsers  from './list-users'
import  users  from './list-users'
import ListUsers from './list-users';

export default async function InitialData() {
  //const users = await getUsers();

  //return <ListUsers users={users} />;
  return <ListUsers  />;
}