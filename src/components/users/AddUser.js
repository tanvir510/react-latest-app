// Library Import
import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

// File Import
import { userAction as action } from '../../store/actions/userAction';

const initialState = {
  id: uuidv4(),
  title: '',
  email: '',
  website: ''
};

export const AddUserModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState || {});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(action.addUser(formData));
    resetForm();
    hideCreateModal();
  };

  const hideCreateModal = () => {
    resetForm();
    handleClose();
  };

  const resetForm = () => {
    setFormData(initialState);
  };
  return (
    <Modal show={show} centered onHide={() => hideCreateModal()} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Add new user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='form-title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={(event) => handleChange(event)}
              name='title'
              type='text'
              value={formData?.title}
              placeholder='Title'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='form-email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(event) => handleChange(event)}
              name='email'
              type='email'
              value={formData?.email}
              placeholder='Enter email'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='form-website'>
            <Form.Label>Website</Form.Label>
            <Form.Control
              onChange={(event) => handleChange(event)}
              name='website'
              type='website'
              value={formData?.website}
              placeholder='Enter website'
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

AddUserModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func
};
