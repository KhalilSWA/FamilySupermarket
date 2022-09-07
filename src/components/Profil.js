import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="prf">
      <Button className="btnx" variant="primary" onClick={handleShow}>
      <div className="profil">
      <img src="img/profil.png" alt="profil" width="30" height="30" />
      </div>
      </Button>
      </div>


      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Se connecter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='log'>
          <br />
        <input className='email' type="email" placeholder="E-mail" /><br/>
        <br/>
        <input className='password' type="password" placeholder="Password" /><br/>
        <br/>
        <br/>
        
       
        </div>
        </Offcanvas.Body>
      </Offcanvas>
      </>
    
  );
}



export default Example;