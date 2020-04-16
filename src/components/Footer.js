import React, { Fragment } from "react";
import uuid from "uuid/v4";
import SweetAlert from "react-bootstrap-sweetalert";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModalContact = () => {
    setIsOpen(true);
  };

  const hideModalContact = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-10 col-12">
              <ul className="footer-info">
                <li>
                  <a href="#!">
                    <img src="assets/img/icon-fb.png" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="assets/img/icon-twitter.png" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img
                      src="assets/img/icon-mail.png"
                      alt="Mail"
                      onClick={() => showModal(prev => !prev)}
                    />
                  </a>
                </li>
                <li className="d-none d-sm-block">
                    contacto@puntoschool.com
                </li>
              </ul>
            </div>
            {showModalContact && (
              <Modal
                show={isOpen}
                onHide={hideModalContact}
                className="modal fade"
              >
                <Modal.Body id="text-center">
                  <Form>
                    <Form.Group className="Modal-contact" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>¿Cómo te podemos ayudar?</Form.Label>
                      <Form.Control type="textarea" placeholder="Escríbenos ;)" />
                    </Form.Group>
                  </Form>
                  <button
                    className="contact-form-buttons"
                    onClick={hideModal}>
                    <Link className="btn-back-blue" to="/">Regresar</Link>
                   <button className="btn-next-blue" type='submit' >Enviar</button>
                  </button>
                </Modal.Body>
              </Modal>
            )}
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
