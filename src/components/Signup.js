import React, { useRef } from 'react'
import {Form,Button,Card} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConformRef = useRef();
  const {signup} = useAuth();
  function handleSubmit(e){
    e.preventDefault()
    signup(emailRef.current.value,passwordRef.current.value)
  }
  return (
    <>
    <Card>
    <Card.Body>
        <h2 className='text-center mb-4'>Sign up</h2>
        <Form onsubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passwordRef} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>conform Password</Form.Label>
        <Form.Control type="password" ref={passwordConformRef} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
        </Form>
    </Card.Body>
    </Card>
      <div className='w-100 text-center mt-2'>
        Already have account login
      </div>
    </>
  )
}

export default Signup;
