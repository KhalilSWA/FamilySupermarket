import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="fav">
      <Button className="btnx" variant="primary" onClick={handleShow}>
      <div className="favoris">
      <img src="img/favs.png" alt="favoris" width="30" height="30" />
      </div>
      </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Favoris</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Liste des favoris
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;