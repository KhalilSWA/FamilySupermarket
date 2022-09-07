import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol >
            <div className="logofooter">
            <img src="img/Supreme.png" alt="logo" width="220" height="80" />
            </div>
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled">
                <a href="#!">Information magasin</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">service après vente</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Conditions générales de vente</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Familysupermarket.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;