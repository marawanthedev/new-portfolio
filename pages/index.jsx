import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Resume from "../src/components/Resume";
import Layout from "../src/layouts/Layout";
import {
  servicesSliderProps,
  testimonialsSliderProps,
} from "../src/sliderProps";
import { useState } from "react";
const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Index = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [message,setMessage] = useState('');

  return (
    <Layout pageClassName={"home"}>
      {/* Section - Hero Started */}
      <section
        className="lui-section lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="container">
          {/* Hero Started */}
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div
                className="content scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}
                      Hello, <b>my name is</b>
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span>
                      <b>Marwan</b> Mostafa{" "}
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    I am <strong>React Web Developer</strong>
                  </div>
                </div>
                <div className="description">
                  <div>
                    <p>
                      I have over 3 years of front-end development experience,
                      specializing in React, Redux, and TypeScript. My work
                      spans various industries, including insuretech and NFT,
                      where I've built complex forms, integrated with blockchain
                      technologies, and developed front-end libraries. I'm also
                      experienced with micro-front-end setups, monorepos, and
                      DevOps tools like Docker and AWS. I'm dedicated to solving
                      complex problems and continuously improving my skills.
                    </p>
                  </div>
                  <div className="social-links">
                    <a
                      target="_blank"
                      rel="nofollow"
                      href="https://github.com/marawanthedev"
                    >
                      <i aria-hidden="true" className="fab fa-github" />
                    </a>
                    <a
                      target="_blank"
                      rel="nofollow"
                      href="https://www.linkedin.com/in/marwan-ahmed-6112801a6/"
                    >
                      <i aria-hidden="true" className="fab fa-linkedin" />
                    </a>
                    <a
                      target="_blank"
                      rel="nofollow"
                      href="https://www.youtube.com/@codewithmarwan"
                    >
                      <i aria-hidden="true" className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
                <div className="bts">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1q1VKe3kEXjfoGrSnVsCwGirCy7RnSS2p/view?usp=sharing"
                    className="btn"
                  >
                    <span>Download CV</span>
                  </a>
                  <a href="#skills-section" className="btn-lnk">
                    {" "}
                    My Skills{" "}
                  </a>
                </div>
              </div>
              <div
                className="slide scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img
                  decoding="async"
                  src="assets/images/marwan.png"
                  alt="<b>Zoé</b> Miller"
                />
                <span className="circle circle-1" />
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-2"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <span
                  className="circle img-3"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <div className="info-list">
                  <ul>
                    <li>
                      <span className="num">
                        3 <strong>+</strong>
                      </span>
                      <span className="value">
                        Years of <strong>Experience</strong>
                      </span>
                    </li>
                    {/* <li>
                      <span className="num">330</span>
                      <span className="value">
                        Completed <strong>Projects</strong>
                      </span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Web Developer </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Skills */}
      <section className="lui-section lui-gradient-center" id="skills-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
                style={{ marginTop: "20px" }}
              >
                <span> Professional Skills </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
                style={{ marginTop: "10px" }}
              >
                <span>
                  {" "}
                  my <b>Stack</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> ReactJS </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> TypeScript </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Next.js </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> React Query </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Formik </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Redux </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> MUI </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Tailwind CSS </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Microfrontend </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Jest </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Cypress </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Frontend Monitoring </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Performance Optimization </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Google Analytics </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Google Tag Manager </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Docker </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Web3 </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span>Smart Contracts Integration </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> SASS </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Git </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Jira </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Scrum </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Familiar with AWS </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Familiar with Node.js </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div class="skills-items">
                  <div
                    class="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 class="name">
                      <span> Familiar with Redis </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div class="skills-items">
                  <div
                    class="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 class="name">
                      <span> Familiar with MongoDB </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div class="skills-items">
                  <div
                    class="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 class="name">
                      <span> Familiar with Prisma </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div class="skills-items">
                  <div
                    class="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 class="name">
                      <span> Familiar with OpenAI </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Skills </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Works */}
      <section className="lui-section lui-gradient-top" id="works-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Portfolio </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>projects</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="v-line v-line-right">
          <div className="container">
            <PortfolioIsotope />
            <div className="lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Resume */}
      <Resume />
      {/* Section - Testimonials */}
      <section
        className="lui-section lui-gradient-center"
        id="testimonials-section"
      >
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Testimonials </span>
              </h2>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="v-line v-line-right">
          <div className="container">
            <Swiper
              {...testimonialsSliderProps}
              className="swiper-container js-testimonials scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <SwiperSlide className="swiper-slide">
             <Link target="_blank" style={{color:"inherit",textDecoration:'none'}} href="https://www.linkedin.com/in/marwan-ahmed-6112801a6/details/recommendations/">
             <div className="testimonials-item">
                  <div className="image">
                    <img
                      decoding="async"
                      src="assets/images/testimonials/jin.jpeg"
                      alt="Jin Kun Yong"
                    />
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="44px"
                        height="34px"
                      >
                        <path
                          fillRule="evenodd"
                          strokeWidth="2px"
                          stroke="rgb(0, 0, 0)"
                          fill="rgb(41, 165, 135)"
                          d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text lui-text">
                    <div>
                      <p>
                        Quick to understand project requirements and does not
                        hesitate to clarify and communicate with the manager.
                        Marwan is cautious of delivery time and pays good
                        attention to details. For any technical use cases or
                        issues missed during the project briefing, Marwan will
                        solve them on his initiative without straying from the
                        main requirements. Happy to work with him again.
                      </p>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Jin Kun Yong</span>
                    </h6>
                    <div className="author">
                      <span>CCo-founder of Re:Crave</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div></Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
               <Link target="_blank" style={{color:"inherit",textDecoration:'none'}} href="https://www.linkedin.com/in/marwan-ahmed-6112801a6/details/recommendations/">
               <div className="testimonials-item">
                  <div className="image">
                    <img
                      decoding="async"
                      src="assets/images/testimonials/nazreen.jpeg"
                      alt="Nazreen mohamed"
                    />
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="44px"
                        height="34px"
                      >
                        <path
                          fillRule="evenodd"
                          strokeWidth="2px"
                          stroke="rgb(0, 0, 0)"
                          fill="rgb(41, 165, 135)"
                          d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text lui-text">
                    <div>
                      <p style={{paddingBottom:"67.5px",paddingTop:"67.5px"}}>
                      Marwan worked on a project I was helping out with. He was proactive in understanding the requirements and saw the work through in a way that upheld the quality to a high standard.
                      </p>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Nazreen Mohamed</span>
                    </h6>
                    <div className="author">
                      <span>DevRel Engineer @SOON</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div></Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
               <Link target="_blank" style={{color:"inherit",textDecoration:'none'}} href="https://www.linkedin.com/in/marwan-ahmed-6112801a6/details/recommendations/">
               <div className="testimonials-item">
                  <div className="image">
                    <img
                      decoding="async"
                      src="assets/images/testimonials/maad.jpeg"
                      alt="Maad Yasser"
                    />
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="44px"
                        height="34px"
                      >
                        <path
                          fillRule="evenodd"
                          strokeWidth="2px"
                          stroke="rgb(0, 0, 0)"
                          fill="rgb(41, 165, 135)"
                          d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text lui-text">
                    <div>
                      <p>
                      I had the pleasure of working with Marwan at quickDesk and I can confidently say that he is an exceptional front-end software developer. His expertise in React is outstanding and He has a great ability to develop intuitive and user-friendly interfaces. He always takes a pride on the quality of his work. I highly recommend him for any front-end software development role, and especially for those utilizing React.
                      </p>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Maad Yasser</span>
                    </h6>
                    <div className="author">
                      <span>Former colleague @QuickDesk</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div></Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonials-item">
                  <div className="image">
                    <img
                      decoding="async"
                      src="assets/images/testi4-3.jpg"
                      alt="Jennifer Smith"
                    />
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="44px"
                        height="34px"
                      >
                        <path
                          fillRule="evenodd"
                          strokeWidth="2px"
                          stroke="rgb(0, 0, 0)"
                          fill="rgb(41, 165, 135)"
                          d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text lui-text">
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Jennifer Smith</span>
                    </h6>
                    <div className="author">
                      <span>CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonials-item">
                  <div className="image">
                    <img
                      decoding="async"
                      src="assets/images/testi4-5.jpg"
                      alt="Paul Freeman"
                    />
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="44px"
                        height="34px"
                      >
                        <path
                          fillRule="evenodd"
                          strokeWidth="2px"
                          stroke="rgb(0, 0, 0)"
                          fill="rgb(41, 165, 135)"
                          d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text lui-text">
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Paul Freeman</span>
                    </h6>
                    <div className="author">
                      <span>Photographer</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
            <div className="lui-bgtitle">
              <span> Reviews </span>
            </div>
          </div>
        </div>
      </section>
      <section className="lui-section lui-gradient-top" id="blog-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Latest Blog </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Articles and Advice</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Archive */}
        <div className="v-line v-line-right">
          <div className="container">
            <div className="blog-items row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img
                          decoding="async"
                          src="assets/images/blogs/compound-pattern.jpeg"
                          alt="The Main Thing For The Designer"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>July, 2024</span>
                    </div>
                    <h5 className="lui-title">React Compound Design pattern</h5>
                    <div className="lui-text">
                      <p>
                        Struggling with React component reusability and
                        customization? 🤔 Learn how the Compound Design Pattern
                        can enhance flexibility and maintainability in our
                        latest tutorial. 🚀 Click to discover practical tips for
                        building scalable, adaptable UI components!
                      </p>
                      <div className="readmore">
                        <Link
                          legacyBehavior
                          href="https://www.linkedin.com/posts/marwan-ahmed-6112801a6_mastering-reusable-react-components-using-activity-7209911997587480576-fsT4?utm_source=share&utm_medium=member_desktop"
                        >
                          <a className="lnk" target="_blank">
                            Read more
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img
                          decoding="async"
                          src="assets/images/blogs/use-transition.jpeg"
                          alt="Follow Your Own Design Process"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>June, 2024</span>
                    </div>
                    <h5 className="lui-title">Use Transition Hook</h5>
                    <div className="lui-text">
                      <p>
                        Struggling with UI lag during heavy state updates in
                        React? 🚀 Discover how `useTransition` can smooth out
                        state transitions and keep your app responsive. 🎉 Learn
                        practical tips and tricks to elevate your performance.
                        Don’t miss out—click to watch our tutorial and boost
                        your React skills today!
                      </p>
                      <div className="readmore">
                        <Link
                          legacyBehavior
                          href="https://www.linkedin.com/posts/marwan-ahmed-6112801a6_mastering-usetransition-in-react-boost-your-activity-7204225328200720384-QuWb?utm_source=share&utm_medium=member_desktop"
                        >
                          <a className="lnk" target="_blank">
                            Read more
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img
                          decoding="async"
                          src="assets/images/blogs/react-snippets.jpeg"
                          alt="Usability Secrets to Create Better Interfaces"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>Jan , 2024</span>
                    </div>
                    <h5 className="lui-title">Custom React.js Snippets</h5>
                    <div className="lui-text">
                      <p>
                        🚀 Exciting News! 🚀 I’m starting a journey of knowledge
                        sharing and can’t wait for you to join me! 🌟 I’ll be
                        posting tips to supercharge your development skills. 🎉
                        Click to explore our first tip on setting custom
                        snippets and boost your coding efficiency. Follow along
                        for weekly updates and let’s elevate our skills
                        together! 💡💻
                      </p>
                      <div className="readmore">
                        <Link
                          legacyBehavior
                          href="https://www.linkedin.com/posts/marwan-ahmed-6112801a6_efficient-react-code-snippet-setup-in-visual-activity-7126551094641504256-uvOt?utm_source=share&utm_medium=member_desktop"
                        >
                          <a className="lnk" target="_blank">
                            {" "}
                            Read more
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
       
            <div className="lui-bgtitle">
              <span> Blog </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Contacts */}
      <section className="lui-section lui-gradient-bottom" id="contact-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Contact Me </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  Let’s <b>Talk About Ideas</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="lui-contacts v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="numbers-items">
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-clock" />
                    </div>
                    <div className="title">
                      <span> Timezone </span>
                    </div>
                    <div className="lui-text">
                      <span> GMT +3 </span>
                    </div>
                  </div>
               
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-envelope" />
                    </div>
                    <div className="title">
                      <span> Email </span>
                    </div>
                    <div className="lui-text">
                      <span> <a target="_blank" href="mailto:jobs@marwan-mostafa.com" style={{color:"inherit"}}>jobs@marwan-mostafa.com</a> </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-address-book" />
                    </div>
                    <div className="title">
                      <span> Phone </span>
                    </div>
                    <div className="lui-text">
                      <span> +601125713359 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div
                  className="contacts-form scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-1.png)",
                    }}
                  />
                  <div className="contacts-form">
                    <form onSubmit={(e) => e.preventDefault()} id="cform">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Full Name <b>*</b>
                              <input type="text" name="name" value={name} onChange={(e)=>{
                                setName(e.target.value)
                              }} />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Email Address <b>*</b>
                              <input type="email" name="email" value={email} onChange={(e)=>{
                                setEmail(e.target.value)
                              }} />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Subject <b>*</b>
                              <input type="text" name="subject" value={subject} onChange={(e)=>{
                                setSubject(e.target.value)
                              }} />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Message <b>*</b>
                              <textarea name="message" defaultValue={message} onChange={(e)=>{
                                setMessage(e.target.value)
                              }} />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
                          <div className="terms-label">
                            * Accept the terms and conditions.
                          </div>
                          <a
                            href={`mailto:jobs@marwan-mostafa.com?subject=${subject}&body= Name: ${name}%20%0AEmail:%20${email}%0AMessage:${message}`}
                            className="btn"
                          >
                            <span>Send Message</span>
                          </a>
                        </div>
                      </div>
                    </form>
                    <div className="alert-success" style={{ display: "none" }}>
                      <p>Thanks, your message is sent successfully.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Contact Me </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
