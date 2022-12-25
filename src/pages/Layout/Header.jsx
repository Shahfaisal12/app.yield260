import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Sidebar from "./Sidebar";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transferent position-absolute">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" onClick={handleShow}>
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="btn1 nav-link mx-5"
                  width={200}
                  aria-current="page"
                  href="/"
                >
                  Chart
                </a>
              </li>
              <li className="nav-item">
                <a className="btn1 nav-link mx-5" width={200} href="/">
                  Connect Wallet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Offcanvas className="Sidebar-content" show={show} onHide={handleClose}>
        <Offcanvas.Header className="justify-content-end" closeVariant='white' closeButton></Offcanvas.Header>
        <Offcanvas.Body>
            <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
