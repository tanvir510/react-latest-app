// Library Import

import { useState, useEffect } from 'react';

// File Import
import { UserAPI } from '../api';

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await UserAPI.getUsers();
      console.log(response?.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>User List</h1>
    </div>
  );
};
