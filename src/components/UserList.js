// Library Import

import { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';

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
      if (response?.status === 200) {
        setUsers(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='user-list'>
      <Container>
        <h2 className='mt-5'>User list display</h2> <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <td>{user?.id}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.website}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
