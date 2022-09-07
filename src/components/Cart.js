import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <div className="cart">
      <img src="img/cart.png" alt="cart" width="30" height="30" />
      </div>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Panier</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Creation de commande
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;