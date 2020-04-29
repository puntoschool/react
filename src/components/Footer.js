import React, { Fragment } from "react";
import uuid from "uuid/v4";
import SweetAlert from "react-bootstrap-sweetalert";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
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
            {showModal && (
              <Modal
                show={isOpen}
                onHide={hideModal}
                className="modalfoot fade"
              >
                <Modal.Body id="text-center">
                  <Form>
                    <Form.Group className="Modal-contactfoot" controlId="formBasicEmail">
                      <Form.Label>Correo Electrónico</Form.Label>
                      <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
                      <Form.Text className="text-muted">
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>¿Cómo te podemos ayudar?</Form.Label>
                      <Form.Control type="textarea" placeholder="Escríbenos ;)" wrap="hard" rows="2" cols="20"/>
                    </Form.Group>
                  </Form>
                  <div
                    className="contact-form-buttons"
                    onClick={hideModal}>
                   <button className="btn-enviar" type='submit' >Enviar</button>
                  </div>
                  <div className="back-modal-footer" onClick={hideModal}>Regresar</div>
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
