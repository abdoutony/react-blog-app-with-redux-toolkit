import { Navbar, Nav } from "rsuite";
import { useNavigate } from "react-router-dom";
export const NavBar = ({ onSelect, activeKey, ...props }) => {
  const navigate = useNavigate();

  return (
    <Navbar className="bg-primary" {...props}>
      <Navbar.Brand href="/">BlogMe</Navbar.Brand>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Nav.Item
          eventKey="1"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Nav.Item>
        <Nav.Item
          eventKey="2"
          onClick={() => {
            navigate("/posts/categories/travel");
          }}
        >
          Travel
        </Nav.Item>
        <Nav.Item
          eventKey="3"
          onClick={() => {
            navigate("/posts/categories/places");
          }}
        >
          Places
        </Nav.Item>
        <Nav.Item
          eventKey="4"
          onClick={() => {
            navigate("/posts/categories/nature");
          }}
        >
          Nature
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
