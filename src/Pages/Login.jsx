import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Login = () => {
  return (
    <div className="login-container row justify-content-center align-content-center">
        <div className='login-form col-lg-3 col-sm-12'>
            <div className="header_title justify-content-center">
                <img src={process.env.PUBLIC_URL + "/assets/images/taskrabbit-logo.png"} className='my-4' alt="" srcset="" />
                <h2>Task</h2> 
                <h2 style={{ color:'#EE981A' }}>Rabbit</h2>
            </div>
            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                <Form.Control id="form-field" type='text' placeholder="Username" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control id="form-field" type="password" placeholder="Password" />
            </FloatingLabel>
            <Button className='login-submit' variant='secondary' size='lg'>
                LOGIN
            </Button>
        </div>
    </div>
  )
}
