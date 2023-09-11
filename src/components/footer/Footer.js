import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        // <h1 className="fixed-bottom text-dark footer">About Us + Contact Us</h1>

        <footer class="text-center text-lg-start bg-white text-muted  footer ">
          <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div class="me-5 d-none d-lg-block">
              <span>Connectez nous sur les réseaux sociaux:</span>
            </div>
        
            <div>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </section>
        
          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">
                    Septième Arche
                  </h6>
                  <p>
                  7ème Arche est une librairie spécialisée dans le domaine du cinéma, qui dispose d’un magasin situé
                  dans la Grande Arche de La Défense. 
                  </p>
                </div>
        
              
        
       
        
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i class="fas fa-home me-3 text-secondary"></i>  Le Parvis, 92800 Puteaux, France</p>
                  <p>
                    <i class="fas fa-envelope me-3 text-secondary"></i>
                    info@septiemearche.com
                  </p>
                  <p><i class="fas fa-phone me-3 text-secondary"></i> 06 77 36 28 71</p>
                </div>
              </div>
            </div>
          </section>
       
        </footer>

            

    );
};

export default Footer;