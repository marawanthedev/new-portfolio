const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
               <a target="_blank" rel="nofollow" href="https://github.com/marawanthedev">
                      <i aria-hidden="true" className="fab fa-github" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/marwan-ahmed-6112801a6/">
                      <i aria-hidden="true" className="fab fa-linkedin" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://www.youtube.com/@codewithmarwan">
                      <i aria-hidden="true" className="fab fa-youtube" />
                    </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-center scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                © 2024 <strong>Marwan Mostafa</strong>. All rights reserved
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
