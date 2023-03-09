import React from "react";
import {Container,Nav,Navbar} from 'react-bootstrap';

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="member">Member</Nav.Link>
            <Nav.Link href="book">Book</Nav.Link>
            <Nav.Link href="borrow">Borrow</Nav.Link>
            <Nav.Link href="history">History</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}



// function Navigation() {
//   return (
//     <>
//         <nav>
//             <ul>
//                 <li><a href="/">Dashboard</a></li>
//                 <li><a href="Member">Member</a></li>
//                 <li><a href="Book">Book</a></li>
//                 <li><a href="Borrow">Borrow</a></li>
//                 <li><a href="History">History</a></li>
//                 <li><a href="Login">Login</a></li>
//             </ul>
//         </nav>
//     </>
//   );
// }

export default Navigation;
