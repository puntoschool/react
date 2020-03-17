import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-10 col-12">
                        <ul className="footer-info">
                            <li><a href="#"><img src="assets/img/icon-fb.png" alt="Facebook" /></a></li>
                            <li><a href="#"><img src="assets/img/icon-twitter.png" alt="Facebook" /></a></li>
                            <li><a href="#"><img src="assets/img/icon-mail.png" alt="Facebook" /></a></li>
                            <li className="d-none d-sm-block"><a href="#">contacto@puntoschool.com</a></li>
                        </ul>
                    </div>
                    {/* <div className="col-2 footer-faq">
                        <a href="#">
                            <img src="assets/img/icon-faq.png" alt="faq icon" />
                            <span>Preguntas Frecuentes</span>
                        </a>
                    </div> */}
                </div>
            </div>
        </footer>
    </Fragment>
  );
};

export default Footer;



