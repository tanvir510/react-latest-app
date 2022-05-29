// Library Import
import { useState, useEffect } from 'react';
import { Table, Container, Alert } from 'react-bootstrap';

// File Import
import { UserAPI } from '../../api';
import { Pagination } from '../pagination/Pagiantion';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchUsers({ page: currentPage });
  }, []);

  const fetchUsers = async (params) => {
    try {
      const response = await UserAPI.getUsers(params);
      if (response?.status === 200) {
        setUsers(response?.data);
      }
    } catch (error) {
      setError(error);
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
        {error && <Alert variant='danger'>{error}</Alert>}
        <div className='d-flex justify-content-center mt-5'>
          {users?.length && (
            <Pagination
              className='pagination-bar'
              currentPage={currentPage}
              totalCount={100}
              pageSize={10}
              onPageChange={(page) => {
                setCurrentPage(page);
                fetchUsers({ page });
              }}
            />
          )}
        </div>
      </Container>
    </div>
  );
};
