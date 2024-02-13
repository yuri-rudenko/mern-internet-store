import React, { useContext } from 'react';
import { Context } from '..';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/esm/Button';
import {observer} from 'mobx-react-lite'


const NavBar = observer(() => {

    const {user} = useContext(Context)

    return (
        <div>
            <Navbar bg='dark' variant='dark'>
            <Container>
                <NavLink style={{color:'white', margin: 'auto 10px'}} to={SHOP_ROUTE}>BuyDevvice</NavLink>
                {user.isAuth ? 
                <Nav className='ms-auto' style={{color:'white'}}>
                    <Button variant={"outline-light"}>Admin panel</Button>
                    <Button variant={"outline-light"} style={{margin: 'auto 10px'}}>Log off</Button>
                </Nav>
                :
                <Nav className='ms-auto' style={{color:'white'}}>
                    <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Log in</Button>
                </Nav>
                }
            </Container>
            </Navbar>

        </div>
    );
})

export default NavBar;
