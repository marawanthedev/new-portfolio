import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="works-box">
        <div
          className="filter-links scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <button
            className={`c-pointer lui-subtitle focus-element ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </button>
          {/* <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "insuretech"
            )}`}
            onClick={handleFilterKeyChange("sorting-insuretech")}
            data-href=".sorting-insuretech"
          >
            Insuretech
          </a> */}
          <button
            className={`c-pointer lui-subtitle focus-element ${activeBtn("sorting-web3")}`}
            onClick={handleFilterKeyChange("sorting-web3")}
            data-href=".sorting-web3"
          >
            Web3
          </button>
          <button
            className={`c-pointer lui-subtitle  focus-element  ${activeBtn(
              "sorting-gifting"
            )}`}
            onClick={handleFilterKeyChange("sorting-gifting")}
            data-href=".sorting-gifting"
          >
            Gifting
          </button>
          <button
            className={`c-pointer lui-subtitle  focus-element  ${activeBtn(
              "sorting-ecommerce"
            )}`}
            onClick={handleFilterKeyChange("sorting-ecommerce")}
            data-href=".sorting-ecommerce"
          >
            E-Commerce
          </button>
        </div>
        <ul className="works-items works-masonry-items row list-none " aria-label="Projects" role="list" style={{ listStyleType: 'none' }}>
          <li className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-web3 " >
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://www.rareapepes.com">
                    <a target="_blank" tabIndex={-1}>
                      <img
                        decoding="async"
                        src="assets/images/projects/rareapepes/zombies.jpeg"
                        alt="Rare Apepes Landing Page Hero Banner"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category focus-element"> Web3,NFT </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://www.rareapepes.com">
                    <a target="_blank" tabIndex={-1}>RareApepes</a>
                  </Link>
                </h5>
                <div className="text">
                  <p  >
                    Innovative NFT platform where users can connect their blockchain wallets to mint unique NFTs, generate custom memes, and explore a vibrant digital art community...
                  </p>
                </div>
                <Link legacyBehavior href="https://www.rareapepes.com/">
                  <a className="lnk focus-element" aria-label="View Rare Apepes NFT Project" target="_blank" tabIndex={0}>See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </li>

          <li className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-gifting" aria-label="Recrave Project">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://admindashboard.marwan-mostafa.com">
                    <a target="_blank" tabIndex={-1}>
                      <img
                        decoding="async"
                        src="assets/images/projects/recrave/landing.png"
                        alt="Recrave Landing page"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Gifting </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://admindashboard.marwan-mostafa.com">
                    <a target="_blank" tabIndex={-1}>Recrave</a>
                  </Link>
                </h5>
                <div className="text">
                  <p className="focus-element">
                    ReCrave's internal dashboard streamlines the management of orders, vendors, and products, ensuring smooth operations...
                  </p>
                </div>
                <Link legacyBehavior href="https://admindashboard.marwan-mostafa.com">
                  <a className="lnk focus-element" aria-label="View Recrave Admin Dashboard Project" target="_blank" tabIndex={0}>See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </li>

          <li className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-ecommerce" aria-label="Train Hard Project">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://trainhardeg.com/">
                    <a target="_blank" tabIndex={-1}>
                      <img
                        decoding="async"
                        src="assets/images/projects/trainhard/products.jpeg"
                        alt="Train Hard Landing page"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> E-Commerce, Supplements </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://trainhardeg.com/">
                    <a target="_blank" tabIndex={-1}>TrainHard</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    TrainHard is a premier supplements store in Egypt, proudly serving customers for over three years...
                  </p>
                </div>
                <Link legacyBehavior href="https://trainhardeg.com/">
                  <a className="lnk focus-element" aria-label="View TrainHard Supplement website project" tabIndex={0} target="_blank">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </li>
        </ul>

        {!noViewMore && (
          <div className="load-more-link">
            <Link legacyBehavior href="/works">
              <a
                className="btn scrolla-element-anim-1 scroll-animate focus-element"
                data-animate="active"
              >
                <span>View More</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
