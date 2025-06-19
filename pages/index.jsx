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
import { useRef } from 'react';

const Index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const testimonialSwiperRef = useRef(null);
  const blogSwiperRef = useRef(null)

  const blogs = [
    {
      date: 'July, 2024',
      title: 'React Compound Design pattern',
      image: 'assets/images/blogs/compound-pattern.jpeg',
      link: 'https://www.linkedin.com/posts/marwan-mostafa-6112801a6_mastering-reusable-react-components-using-activity-7209911997587480576-R2wo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAYA20BfG4b6te8h187AkdKDcQVC09Fw2c',
      desc: 'Struggling with React component reusability and customization? 🤔 Learn how the Compound Design Pattern can enhance flexibility and maintainability in our latest tutorial. 🚀 Click to discover practical tips for building scalable, adaptable UI components!'
    },
    {
      date: 'June, 2024',
      title: 'Use Transition Hook',
      image: 'assets/images/blogs/use-transition.jpeg',
      link: 'https://www.linkedin.com/posts/marwan-mostafa-6112801a6_mastering-usetransition-in-react-boost-your-activity-7204225328200720384-rNGE?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAYA20BfG4b6te8h187AkdKDcQVC09Fw2c',
      desc: 'Struggling with UI lag during heavy state updates in React? 🚀 Discover how `useTransition` can smooth out state transitions and keep your app responsive. 🎉 Learn practical tips and tricks to elevate your performance.'
    },
    {
      date: 'June, 2024',
      title: 'Git Commit Messages Standardization',
      image: 'assets/images/blogs/git-commit.jpg',
      link: 'https://www.linkedin.com/posts/marwan-mostafa-6112801a6_commit-msg-activity-7144744464601841664-gDep?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAYA20BfG4b6te8h187AkdKDcQVC09Fw2c',
      desc: '🚀 Exciting News in the World of Git Commit Message Standards! 🚀 Learn how to set up Git commit message restrictions using a specified pattern. Standardizing commit messages enhances collaboration and brings consistency across your team.'
    },
    {
      date: 'June, 2024',
      title: 'Deep Dive into CSS Layering',
      image: 'assets/images/blogs/z-index.jpg',
      link: 'https://www.linkedin.com/posts/marwan-mostafa-6112801a6_understanding-the-magic-of-z-index-in-css-activity-7129132049587744768-T9fV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAYA20BfG4b6te8h187AkdKDcQVC09Fw2c',
      desc: "This week's spotlight is on the enigmatic z- index property—demystifying its secrets and equipping you with the skills to master its nuances.Learn how z - index behaves with parent - child relationships."
    },
    {
      date: 'Jan, 2024',
      title: 'Custom React.js Snippets',
      image: 'assets/images/blogs/react-snippets.jpeg',
      link: 'https://www.linkedin.com/posts/marwan-mostafa-6112801a6_efficient-react-code-snippet-setup-in-visual-activity-7126551094641504256-BebX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAYA20BfG4b6te8h187AkdKDcQVC09Fw2c',
      desc: '🚀 Exciting News! 🚀 I’m starting a journey of knowledge sharing! 🌟 Click to explore our first tip on setting custom snippets and boost your coding efficiency.'
    }
  ];
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
                <div className="titles ">
                  <div className="lui-subtitle" >
                    <span >
                      {" "}
                      Hello, <b>my name is</b>
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                  // data-splitting="chars"
                  // data-animate="active"
                  >
                    <span>
                      <b>Marwan</b> Mostafa{" "}
                    </span>
                  </h1>

                </div>
                <div className="label lui-subtitle " >
                  {" "}
                  I am <strong>Software Engineer</strong>
                </div>
                <div className="description">
                  <div>
                    <p >
                      I have over 4 years of front-end development experience,
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
                      className="focus-element"
                      aria-label="Checkout my Github"
                      href="https://github.com/marawanthedev"
                    >
                      <i aria-hidden="true" className="fab fa-github" />
                    </a>
                    <a
                      target="_blank"
                      rel="nofollow"
                      className="focus-element"
                      aria-label="Connect with Me on Linkedin"
                      href="https://www.linkedin.com/in/marwan-mostafa-6112801a6/"
                    >
                      <i aria-hidden="true" className="fab fa-linkedin" />
                    </a>
                    <a
                      target="_blank"
                      rel="nofollow"
                      className="focus-element"
                      aria-label="Watch Me on Yotube"
                      href="https://www.youtube.com/@codewithmarwan"
                    >
                      <i aria-hidden="true" className="fab fa-youtube" />
                    </a>


                  </div>
                </div>
                <div className="bts">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1G2HmWJDikt48tdka-EZ1w7ltriEETTTY/view?usp=sharing"
                    className="btn"
                    aria-label="Download my CV"
                  >
                    Download CV
                  </a>
                  <a href="#skills-section" aria-label="View My Skills" className="btn-lnk focus-element">
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
                  alt="Marwan Mostafa"
                  title="marwan developer personal picture"
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
                        4 <strong>+</strong>
                      </span>
                      <span className="value">
                        Years of <strong className="years">Experience</strong>
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
                Professional Skills
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate "
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
              <ul className="skills-list row " role="list" style={{ listStyleType: "none" }}>
                {[
                  "ReactJS",
                  "TypeScript",
                  "Next.js",
                  "React Query",
                  "Formik",
                  "Redux",
                  "MUI",
                  "Tailwind CSS",
                  "Microfrontend",
                  "Jest",
                  "Cypress",
                  "Frontend Monitoring",
                  "Performance Optimization",
                  "Google Analytics",
                  "Google Tag Manager",
                  "Docker",
                  "Web3",
                  "Smart Contracts Integration",
                  "SASS",
                  "Git",
                  "Jira",
                  "Scrum",
                  "Familiar with AWS",
                  "Familiar with Node.js",
                  "Familiar with Redis",
                  "Familiar with MongoDB",
                  "Familiar with Prisma",
                  "Familiar with OpenAI",
                ].map((skill, i) => (
                  <li
                    key={i}
                    className="col-xs-6 col-sm-4 col-md-3 col-lg-3 skills-items list-style-none"
                    role="listitem"
                  >
                    <div
                      className="skills-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <h6 className="name">
                        <span >{skill}</span>
                      </h6>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lui-bgtitle">
              <span>Skills</span>
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
                <span >
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
                <div target="_blank" style={{ color: "inherit", textDecoration: 'none' }} tabIndex={-1}  >
                  <div className="testimonials-item">
                    <div className="image">
                      <img
                        decoding="async"
                        src="assets/images/testimonials/faiz.jpg"
                        alt="Marwan Mostafa"
                        title="marwan developer Jin Kun testinmonial"
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
                          Managing Marwan was a rewarding experience as I witnessed his growth and dedication firsthand. I was continually impressed by his resilience and positive attitude when faced with challenging situations. He demonstrated a willingness to listen, engage in open dialogue, and find solutions that worked for everyone involved. Marwan showed an eagerness to seek constructive feedback, using it as a stepping stone for growth, and consistently worked to improve his technical skills. His strong drive for self-improvement and his ability to adapt to feedback make him a valuable asset to any team.
                        </p>
                      </div>
                    </div>
                    <div className="info">
                      <h6 className="name">
                        <span>Faiz Alkautsar</span>
                      </h6>
                      <div className="author" style={{ marginBottom: "15px" }}>
                        <span>Technical Lead @tigerlab </span>
                      </div>

                      <Link className="testimonial-link focus-element" target="_blank" href="https://www.linkedin.com/in/marwan-mostafa-6112801a6/details/recommendations" >View Recommendation</Link>
                    </div>
                    <div
                      className="bg-img"
                      style={{
                        backgroundImage: "url(assets/images/pat-2.png)",
                      }}
                    />
                  </div>

                </div>

              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div target="_blank" style={{ color: "inherit", textDecoration: 'none' }} tabIndex={-1}  >
                  <div className="testimonials-item">
                    <div className="image">
                      <img
                        decoding="async"
                        src="assets/images/testimonials/jin.jpeg"
                        alt="Marwan Mostafa"
                        title="marwan developer Jin Kun testinmonial"
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
                      <div className="author" style={{ marginBottom: "15px" }}>
                        <span>Co-founder of Re:Crave</span>
                      </div>

                      <Link className="testimonial-link focus-element" target="_blank" onFocus={() => testimonialSwiperRef.current?.slideToLoop(1)} href="https://www.linkedin.com/in/marwan-mostafa-6112801a6/details/recommendations" >View Recommendation</Link>
                    </div>
                    <div
                      className="bg-img"
                      style={{
                        backgroundImage: "url(assets/images/pat-2.png)",
                      }}
                    />
                  </div>

                </div>

              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div >
                  <div className="testimonials-item">
                    <div className="image">
                      <img
                        decoding="async"
                        src="assets/images/testimonials/nazreen.jpeg"
                        alt="Marwan Mostafa"
                        title="marwan developer Nazreen AWS testinmonial"
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
                      <p>
                        Marwan worked on a project I was helping out with. He was proactive in understanding the requirements and saw the work through in a way that upheld the quality to a high standard.
                      </p>
                    </div>
                    <div className="info">
                      <h6 className="name">
                        <span>Nazreen Mohamed</span>
                      </h6>
                      <div className="author" style={{ marginBottom: '15px' }}>
                        <span>DevRel Engineer @SOON</span>
                      </div>
                      <Link className="testimonial-link focus-element" target="_blank" onFocus={() => testimonialSwiperRef.current?.slideToLoop(2)} href="https://www.linkedin.com/in/marwan-mostafa-6112801a6/details/recommendations" >View Recommendation</Link>
                    </div>
                    <div
                      className="bg-img"
                      style={{
                        backgroundImage: "url(assets/images/pat-2.png)",
                      }}
                    />
                  </div></div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div >
                  <div className="testimonials-item">
                    <div className="image">
                      <img
                        decoding="async"
                        src="assets/images/testimonials/maad.jpeg"
                        alt="Marwan Mostafa"
                        title="marwan developer MAAD testinmonial"
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
                      <div className="author" style={{ marginBottom: '15px' }}>
                        <span>Former colleague @QuickDesk</span>
                      </div>
                      <Link className="testimonial-link focus-element" onFocus={() => testimonialSwiperRef.current?.slideToLoop(3)} target="_blank" href="https://www.linkedin.com/in/marwan-mostafa-6112801a6/details/recommendations" >View Recommendation</Link>
                    </div>
                    <div
                      className="bg-img"
                      style={{
                        backgroundImage: "url(assets/images/pat-2.png)",
                      }}
                    />
                  </div></div>
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
            <Swiper
              {...testimonialsSliderProps}
              onSwiper={(swiper) => (blogSwiperRef.current = swiper)}
              className="swiper-container js-testimonials scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              {blogs.map((blog, idx) => (
                <SwiperSlide key={idx} className="swiper-slide">
                  <div style={{ color: 'inherit', textDecoration: 'none' }} tabIndex={-1}>
                    <div className="testimonials-item">
                      <div className="image">
                        <img decoding="async" src={blog.image} alt={blog.title} />
                      </div>
                      <div className="text lui-text">
                        <p>{blog.desc}</p>
                      </div>
                      <div className="info">
                        <h6 className="name">
                          <span>{blog.title}</span>
                        </h6>
                        <div className="author" style={{ marginBottom: '15px' }}>
                          <span>{blog.date}</span>
                        </div>
                        <Link
                          className="testimonial-link focus-element"
                          target="_blank"
                          href={blog.link}
                          onFocus={() => blogSwiperRef.current?.slideToLoop(idx)}
                        >
                          Read More
                        </Link>
                      </div>
                      <div
                        className="bg-img"
                        style={{ backgroundImage: 'url(assets/images/pat-2.png)' }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination" />
            </Swiper>

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
                      <span> <a target="_blank" href="mailto:jobs@marwan-mostafa.com" style={{ color: "inherit" }}>jobs@marwan-mostafa.com</a> </span>
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
                              <input type="text" name="name" value={name} onChange={(e) => {
                                setName(e.target.value)
                              }} />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Email Address <b>*</b>
                              <input type="email" name="email" value={email} onChange={(e) => {
                                setEmail(e.target.value)
                              }} />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Subject <b>*</b>
                              <input type="text" name="subject" value={subject} onChange={(e) => {
                                setSubject(e.target.value)
                              }} />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Message <b>*</b>
                              <textarea name="message" defaultValue={message} onChange={(e) => {
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
