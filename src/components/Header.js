import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image from '../assets/images/news.png'


function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
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
            <Nav.Link href="#action1">Home</Nav.Link>
           
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#animals">Animals</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#birds">
                Birds
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Books">
                Books
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Weather">
                Weather
              </NavDropdown.Item>
             
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              aria-describedby="basic-addon1"
             
            />
             
            <Button href=" #category" variant="outline-success">
              Search
              
            </Button>
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;