import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image from '../assets/images/news.png'
import React, { useState } from "react";




function Header(props) {
  const [inputQuery, setInputQuery] = useState("");

  const searchQuery = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setInputQuery(value);
  };

  const handleSearchUser = (e) => {
    e.preventDefault();
    props.searchNews(inputQuery);
    
   
  
  //   console.log(inputQuery);

  //   const api = `https://newsapi.org/v2/everything?q=${inputQuery}&apiKey=17e3958800ec4c7e913cc29b812579d4`;
    

  //   const fetchApi = async () => {
  //     const response = await fetch(api);
  //     const data = await response.json();
  //     console.log(data);
  //   };
  //   fetchApi();
   };
  

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand >
          <img
            alt="/news.png"
            src={image}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
         News App
        </Navbar.Brand>
       
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="Home">Home</Nav.Link>
           
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => props.searchNews('Animals')} >Animals </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => props.searchNews('Robot')} >Robot </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => props.searchNews('Birds')}>
     
                Birds 
              </NavDropdown.Item >
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => props.searchNews('Novel')}>
                Novel
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => props.searchNews('Weather')}>
                Weather
              </NavDropdown.Item>
             
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex" onSubmit={(e) => handleSearchUser(e)}>
            
            <Form.Control
             placeholder="Search"
             className="me-2 w-100"
             aria-label="Search"
             aria-describedby="basic-addon1"
             value={inputQuery}
             onChange={searchQuery}
             
            
             
            />
           
             
            <Button   onClick = {handleSearchUser}  variant="outline-success">
              Search
              
            </Button>
            
          </Form>
         
   
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  }

export default Header;