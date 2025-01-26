import { Fragment, useEffect } from "react";
import {
  activeAnimation,
  initCursor,
  jarallaxAnimation,
  stickyNav,
} from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import GA4Script from "../../util/Ga4Script";

import { RM } from '@request-metrics/browser-agent';


const Layout = ({ children, pageClassName }) => {
  useEffect(() => {
    activeAnimation();
    initCursor();
    window.addEventListener("scroll", activeAnimation);
    window.addEventListener("scroll", stickyNav);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Splitting = require("splitting");
    }
    RM.install({
      token: "y9km6jb:t4wu3mc"
    });
    Splitting();
    jarallaxAnimation();
    document.querySelector("body").className = pageClassName
      ? pageClassName
      : "";
  });

  return (
    <Fragment>
      <GA4Script measurementId='G-Y8LGJCC61B' />
      <div className="container-page">
        <Header />
        {/* Wrapper */}
        <div className="wrapper">{children}</div>
        {/* Footer */}
        <Footer />
      </div>
      {/* cursor */}
      <div className="cursor" />
    </Fragment>
  );
};
export default Layout;
