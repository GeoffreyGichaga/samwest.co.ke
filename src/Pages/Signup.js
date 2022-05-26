import React from 'react'
import { Container, Card, Col, Row,Form,Button } from 'react-bootstrap'
import '../Styling/Signup.css'
import logisticslogo2 from '../assets/logisticslogo2.png'

const Login = () => {
  return (
    <Container className=''>
        <Row className='d-flex justify-content-center mt-lg-5 m-lg-5'>
            <Col sm={12} md={6} lg={6} className='black-side mt-lg-5 '>
                <div className='d-flex justify-content-center mt-5 '>
                    <img className='logo mt-5 mb-5 item-' src={logisticslogo2} alt='logo'/>

                </div>

                <div className='d-flex justify-content-center  mb-lg-5'>
                    <h3 className='login-text'>SamWest Distributors</h3>
                </div>
                

                

            </Col>
            
            <Col className='mt-lg-5'>
                <div className=' mt-3 mt-lg-0'>
                    <h4 className='login-main text-center '>Register Your Account</h4>
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='login-heads'>FullNames</Form.Label>
                        <Form.Control id='input1' className='login-text' type="text" placeholder="Enter Your names" />

                        <Form.Label className='login-heads'>Phonenumber</Form.Label>
                        <Form.Control id='input2' className='login-text' type="text" placeholder="Enter Phonenumber" />

                        <Form.Label className='login-heads'>Username</Form.Label>
                        <Form.Control id='input3' className='login-text' type="email" placeholder="Enter email" />

                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='login-heads'>Password</Form.Label>
                        <Form.Control id='input4' className='login-text' type="password" placeholder="Password" />
                    </Form.Group>
                    <a id='small-text2' className='small-text2' href='/signup'>Have an Account Already? Login</a>
                    
                    <div className='d-flex justify-content-center mt-4 mt-lg-4'>
                        <Button id='loginButton' className='login-btn' variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            
            </Col>
        </Row>
        

    </Container>
  )
}

export default Login