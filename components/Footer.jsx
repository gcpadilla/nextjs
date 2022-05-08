import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaRss } from "react-icons/fa";

const Footer = () => {
   return (
      <div className="mt-4" style={{ height: "100px" }}>
         <div className="container">
            <div className="row" style={{ borderBottom: "1px solid #cccccc" }}>
               <div className="col-sm d-flex flex-wrap align-items-center justify-content-start">
                  <div className="container">
                     <div className="row">
                        <div className="col-sm-3">
                           <FaFacebookF />
                        </div>
                        <div className="col-sm-3">
                           <FaTwitter />
                        </div>
                        <div className="col-sm-3">
                           <FaInstagram />
                        </div>
                        <div className="col-sm-3">
                           <FaRss />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-sm d-flex aalign-items-center justify-content-center">
                  <p className="h1 text-info">LA NACION</p>
               </div>
               <div className="col-sm d-flex align-items-center justify-content-end">
                  <img src="stores.png" alt="" />
               </div>
            </div>
         </div>
         <div className="container-fluid mt-4">
            <div className="row">
               <div className="col-sm-8 d-flex align-items-center justify-content-start">
                  <a href="#" className="mr-2">
                     Mapa del sitio
                  </a>
                  <a href="#" className="mr-2">
                     Ayuda
                  </a>
                  <a href="#" className="mr-2">
                     Términos y condiciones
                  </a>
                  <a href="#" className="mr-2">
                     ¿Cómo anunciar?
                  </a>
                  <a href="#">Suscribirse al diario impreso</a>
               </div>
               <div className="col-sm-4 d-flex align-items-center justify-content-end">
                  <div className="mr-2">Protegido por re CAPTCHA:</div>
                  <a href="#" className="mr-2">
                     Condiciones
                  </a>
                  <a href="#" className="mr-2">
                     Privacidad
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
