import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, DropdownButton, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './HeadernavBar.css'


class HeadernavBar extends Component {
state ={
    disciplines: []
}

    componentDidMount() {
        this.getDisciplines()
    }

    getDisciplines = () => {
        axios.get('/api/disciplines')
            .then((res) => {
                this.setState({
                    disciplines: res.data
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>Your Gym Here</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href='/' href='/' to='/'>Home</NavItem>
                        <NavItem eventKey={4} componentClass={Link} href='/login' href='/login' to='/login'>login</NavItem>
                        <NavItem eventKey={3} componentClass={Link} href='/Signup' href='/Signup' to='/Signup'>sign up</NavItem>
                        <NavItem eventKey={2} > <DropdownButton
                         title= "Classes">
                            {this.state.disciplines.map((discipline)=>{
                                return(
                                    <MenuItem>{discipline.name}</MenuItem>
                                )
                            })}
                            
                        </DropdownButton>
                        </NavItem>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default HeadernavBar;