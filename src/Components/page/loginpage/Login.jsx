import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAuth } from '../../../Authcontext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [islogedin, setIsLogin] = useState(true);
  const [username, setUserName] = useState(''); 
  const [password, setPassword] = useState('');  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/dashboard');
    } catch (err) {
      alert('Invalid login');
      console.error(err);
    }
  };

  return (
    <>
      {islogedin ? (
        <div className="container bg-white mt-5 mb-5">
          <div className="form-container">
            <Form onSubmit={handleSubmit} >
              <h3 className='Login'>Login</h3>
              <section >
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter user name"
                  />
                </Form.Group>
              </section>
              <section>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                </Form.Group>
              </section>
              <div className='text-center'><Button className='btn' type='submit'>Login</Button></div>
            </Form>
            <div className='Signup'>
              Not a member?{' '}
              <a href="#" onClick={() => setIsLogin(false)}> Sign Up Now</a>
            </div>
          </div>
        </div>
      ) : (
        <div className="container bg-white mt-5 mb-5">
          <div className="form-container">
            <Form>
              <h3 className='Login'>Sign Up</h3>
              <section >
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Full Name" />
                </Form.Group>
              </section>
              <section>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
              </section>
              <section>
                <Form.Group className="mb-3">
                  <Form.Label>Confrim Password</Form.Label>
                  <Form.Control type="password" placeholder="Confrim Enter Password" />
                </Form.Group>
              </section>
              <div className='text-center'><Button className='btn' type='submit'>Sign Up</Button></div>
            </Form>
            <div className='Signup'>
              Already a member?{' '}
              <a href="#" onClick={() => setIsLogin(true)}> Login Now</a>
            </div>
          </div>
        </div>
      )
      }
    </>
  )
}

export default Login