import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";


const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">CC Exchanges</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
};

// const Buttons = () => {
//   return (
//     <div>
//       {/* <Button className="Promo-Buttons1" variant="primary">
//         x
//       </Button>
//       <Button className="PromoButtons2" variant="warning">
//         x
//       </Button>
//       <Button className="Promo-Buttons3" variant="success">
//         x
//       </Button> */}
//     </div>
//   );
// };

export default NavBar;
