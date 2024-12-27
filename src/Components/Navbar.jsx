import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useFirebase } from '../Context/firebase';

function ColorSchemesExample() {
  const{user,signOut}=useFirebase();
  return (
    <>
     <Navbar
  style={{
    // backgroundColor: "#B2EC5D",
    backgroundColor:"black",
    border: "3px solid black", // Add black solid border
    borderRadius: "3px", // Set border radius to 3px
  }}
  data-bs-theme="dark"
  className="navbar"
>
  <Container>
    <Navbar.Brand
      href="/"
      style={{
        color: "white",
        fontWeight: "bold",
      }}
    >
      Med-Saathi
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link
        href="/"
        style={{
          color: "white",
        }}
      >
        Home
      </Nav.Link>
      <Nav.Link
        href="patientForm"
        style={{
          color: "white",
        }}
      >
        Patient Form
      </Nav.Link>
      <Nav.Link
        href="dispensary"
        style={{
          color: "white",
        }}
      >
        Dispensary
      </Nav.Link>
      {!user ? (
        <>
          <Nav.Link
            href="login"
            style={{
              color: "white",
           
            }}
          >
            Login
          </Nav.Link>
          <Nav.Link
            href="register"
            style={{
              color: "white",
              
            }}
          >
            Register
          </Nav.Link>
          <Nav.Link
            href="PatientUI"
            style={{
              color: "white",
            }}
          >
            Patient UI
          </Nav.Link>
        </>
      ) : (
        <button
          style={{
            color: "white",
            fontWeight: "bold",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </button>
      )}
    </Nav>
  </Container>
</Navbar>

      <br />
    
    </>
  );
}

export default ColorSchemesExample;