import React from 'react'
import { Nav,Navbar,NavDropdown,Button,Form,FormControl } from 'react-bootstrap'

export default function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Todo-list</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/post">Post</Nav.Link>
                
                </Nav>
                <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
