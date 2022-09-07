import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <NavDropdown title="Produits" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Alimentation</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Multimedia et Electroménager</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Habillement</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Hygiène</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Brico et Jardin</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Animaux</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Promotions" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Toutes nos promotions</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Services" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Information magasin</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">service client</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Recettes et inspiration" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Plat du jour</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Recettes</NavDropdown.Item>
        </NavDropdown>

    </Nav>
  );
}

export default NavDropdownExample;