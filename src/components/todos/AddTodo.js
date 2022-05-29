// Library Import
import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

// File Import
import { todoAction as action } from '../../store/actions/todoAction';

const initialState = {
  id: uuidv4(),
  title: '',
  email: '',
  website: ''
};

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState || {});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(action.addTodo(formData));
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialState);
  };
  return (
    <div>
      <Container>
        <h2 className='mt-5'>Create new todo</h2> <hr />
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
      </Container>
    </div>
  );
};
