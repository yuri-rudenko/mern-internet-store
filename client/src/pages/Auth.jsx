import React from 'react';
import {Button, Container, Form, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/esm/Card'
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <Container className="d-flex align-items-center justify-content-center"
        style={{height: window.innerHeight - 54}}>
            
            <Card style={{width: 600, display: 'flex', alignItems:'center', flexDirection:'column'}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Authorisation' : 'Registration'}</h2>
                    <Form className='d-flex flex-column'>
                        <Form.Control className='mt-3' placeholder='Enter your email'/>
                        <Form.Control className='mt-3' placeholder='Enter your password'/>
                        <div className='mt-3 d-flex justify-content-between align-items-center'>
                            {isLogin ? <div>
                                No account? <NavLink to={REGISTRATION_ROUTE}> Register! </NavLink>
                            </div>
                            :
                            <div>
                                Already have an account? <NavLink to={LOGIN_ROUTE}> Register! </NavLink>
                            </div>}
                            <Button style={{marginLeft: '20px'}} className='align-self-end' variant={'outline-success'}>{isLogin ? 'Log In' : 'Register'}</Button>
                        </div>
                    </Form>

            </Card>
        </Container>
    );
}

export default Auth;
