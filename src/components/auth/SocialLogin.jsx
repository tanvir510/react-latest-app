// Library Import
import { Form } from 'react-bootstrap';

// File import
import GoogleIcon from '../../assets/images/icon/google.png';
import FacebookIcon from '../../assets/images/icon/facebook.png';
import TwitterIcon from '../../assets/images/icon/twitter.png';

export const SocialLogin = () => {
  return (
    <div className='page-wrapper'>
      <div className='form-wrapper'>
        {/* Form area */}
        <Form onSubmit={(e) => e.preventDefault()}>
          <h4 className='form-title text-center'>Login</h4>
          <div className='mb-3'>
            <Form.Label htmlFor='email' className='form-label'>
              Email
            </Form.Label>
            <Form.Control
              type='text'
              name='email'
              onChange={(e) => console.log(e)}
              placeholder='abc@example.com'
              id='email'
              value=''
            />
          </div>

          <div className='mb-3'>
            <Form.Label htmlFor='username' className='form-label'>
              Username
            </Form.Label>
            <Form.Control
              type='text'
              name='username'
              onChange={(e) => console.log(e)}
              placeholder='abc123'
              id='username'
              value=''
            />
          </div>

          <div className='mb-3'>
            <Form.Label htmlFor='name' className='form-label'>
              Username
            </Form.Label>
            <Form.Control
              type='password'
              name='password'
              onChange={(e) => console.log(e)}
              placeholder='**********'
              id='password'
              value=''
            />
          </div>

          <div className='action-btn'>
            <button className='button primary'>Submit</button>
          </div>
        </Form>

        {/* Divider */}
        <div className='divider my-3'>
          <span>OR</span>
        </div>

        {/* Social login */}
        <ul className='social-icons'>
          <li>
            <img src={GoogleIcon} alt='Social Icon' />
          </li>
          <li>
            <img src={FacebookIcon} alt='Social Icon' />
          </li>
          <li>
            <img src={TwitterIcon} alt='Social Icon' />
          </li>
        </ul>

        {/* Already have account */}

        <div className='has-account'>
          Already have an account ? <span>Login</span>
        </div>
      </div>
    </div>
  );
};
