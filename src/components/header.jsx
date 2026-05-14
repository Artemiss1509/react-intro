import { Button, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="px-4 py-3">
      <Container className="d-flex justify-content-between align-items-center">
        <h2 className="text-white m-0">React Basics</h2>

        <div className="d-flex gap-2">
          <Button variant="outline-light">Users</Button>
          <Button variant="outline-light">Forms</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;