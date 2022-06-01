// File Import
import { UserList } from '../users/UserList';
import { AddUserModal } from '../users/AddUser';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

export const UserPanel = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  return (
    <Container>
      <div className='add-user-wrapper'>
        <div className='add-user-wrapper d-flex justify-content-between align-items-center'>
          <h2>User Panel</h2>
          <button className='btn btn-success' onClick={() => setShowCreateModal(true)}>
            Create User
          </button>
        </div>

        <hr />
        <AddUserModal show={showCreateModal} handleClose={() => setShowCreateModal(false)} />
      </div>
      <UserList />
    </Container>
  );
};
