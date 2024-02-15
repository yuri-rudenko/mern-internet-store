import React, { useContext } from 'react';
import { Context } from '..';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/esm/Button';
import {observer} from 'mobx-react-lite'


const NavBar = observer(() => {

    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logout = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
        <div>
            <Navbar bg='dark' variant='dark'>
            <Container>
                <NavLink style={{color:'white', margin: 'auto 10px'}} to={SHOP_ROUTE}>BuyDevice</NavLink>
                {user.isAuth ? 
                <Nav className='ms-auto' style={{color:'white'}}>
                    <Button onClick={() => navigate(ADMIN_ROUTE)} variant={"outline-light"}>Admin panel</Button>  
                    <Button onClick={() => logout()} variant={"outline-light"} style={{margin: 'auto 10px'}}>Log off</Button>
                </Nav>
                :
                <Nav className='ms-auto' style={{color:'white'}}>
                    <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Log in</Button>
                </Nav>
                }
            </Container>
            </Navbar>

        </div>
    );
})

export default NavBar;
