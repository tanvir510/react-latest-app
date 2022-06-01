// Library Import
import { useState, useEffect } from 'react';
import { Table, Alert } from 'react-bootstrap';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';

// File Import
import { UserAPI } from '../../api';
import { Pagination } from '../pagination/Pagiantion';
import { userAction as action } from '../../store/actions/userAction';

export const UsersList = (props) => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState(props?.users || []);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchUsers({ page: currentPage });
  }, []);

  useEffect(() => {
    setUsers(props?.users);
  }, [props?.users]);

  const fetchUsers = async (params) => {
    try {
      const response = await UserAPI.getUsers(params);
      if (response?.status === 200) {
        dispatch(action.getUsers(response?.data));
      }
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className='user-list'>
      {users && (
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
      )}
      {!users && <p>No data found !</p>}
      {error && <Alert variant='danger'>{error}</Alert>}
      <div className='d-flex justify-content-center my-5'>
        {users && (
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
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.array
};

const mapStateToProps = (state) => ({
  users: state.users
});

export const UserList = connect(mapStateToProps)(UsersList);
