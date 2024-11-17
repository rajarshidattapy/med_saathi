import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='navbar'> 
        <Container>
          <Navbar.Brand href="/">Med-Saathi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
            <Nav.Link href="patientForm">Patient Form </Nav.Link>
            <Nav.Link href="dispensary">Dispensary : </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    
    </>
  );
}

export default ColorSchemesExample;