// Library Import
import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

// File Import
import { userAction as action } from '../../store/actions/userAction';
import { useFormik } from 'formik';

const initialValues = {
  title: '',
  email: '',
  website: ''
};

export const AddUserModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialValues || {});

  // Validation conditions
  const validate = (values) => {
    let errors = {};

    if (!values.title) errors.title = 'Title field is required !';

    if (!values.email) {
      errors.email = 'Email field is required !';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email format is not valid !';
    }

    if (!values.website) errors.website = 'Website field is required !';

    return errors;
  };

  // formik main hooks
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => console.log('Form Data: ', values),
    validate
  });

  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(action.addUser(formData));
  //   resetForm();
  //   hideCreateModal();
  // };

  const hideCreateModal = () => {
    resetForm();
    handleClose();
  };

  const resetForm = () => {
    setFormData(initialValues);
  };
  return (
    <Modal show={show} centered onHide={() => hideCreateModal()} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Add new user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className='mb-3' controlId='form-title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.title}
              isInvalid={formik.errors.title}
              name='title'
              type='text'
              placeholder='Title'
            />
            {formik.errors.title && (
              <Form.Control.Feedback type='invalid'>{formik.errors.title}</Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group className='mb-3' controlId='form-email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.email}
              isInvalid={formik.errors.email}
              name='email'
              type='email'
              placeholder='Enter email'
            />

            <Form.Control.Feedback type='invalid'>{formik.errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' controlId='form-website'>
            <Form.Label>Website</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.website}
              isInvalid={formik.errors.website}
              name='website'
              type='website'
              placeholder='Enter website'
            />
            {formik.errors.website && (
              <Form.Control.Feedback type='invalid'>{formik.errors.website}</Form.Control.Feedback>
            )}
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
