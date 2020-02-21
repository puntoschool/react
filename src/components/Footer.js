import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer class="footer">
            <div class="container-fluid fixed">
                <div class="row">
                    <div class="col-10">
                        <ul class="footer-info">
                            <li><a href="#"><img src="assets/img/icon-fb.png" alt="Facebook" /></a></li>
                            <li><a href="#"><img src="assets/img/icon-twitter.png" alt="Facebook" /></a></li>
                            <li><a href="#"><img src="assets/img/icon-mail.png" alt="Facebook" /></a></li>
                            <li><a href="#">contacto@puntoschool.com</a></li>
                        </ul>
                    </div>
                    <div class="col-2 footer-faq">
                        <a href="#"><img src="assets/img/icon-faq.png" alt="faq icon" /><span>Preguntas Frecuentes</span></a>
                    </div>
                </div>
            </div>
        </footer>
    </Fragment>
  );
};

export default Footer;



