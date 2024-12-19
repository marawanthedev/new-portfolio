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
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "insuretech"
            )}`}
            onClick={handleFilterKeyChange("sorting-insuretech")}
            data-href=".sorting-insuretech"
          >
            Insuretech
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-web3")}`}
            onClick={handleFilterKeyChange("sorting-web3")}
            data-href=".sorting-web3"
          >
            Web3
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-gifting"
            )}`}
            onClick={handleFilterKeyChange("sorting-gifting")}
            data-href=".sorting-gifting"
          >
            Gifting
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-ecommerce"
            )}`}
            onClick={handleFilterKeyChange("sorting-ecommerce")}
            data-href=".sorting-ecommerce"
          >
            E-Commerce
          </a>
        </div>
        <div className="works-items works-masonry-items row">

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-web3 ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://www.rareapepes.com">
                    <a target="_blank">
                      <img
                        decoding="async"
                        src="assets/images/projects/rareapepes/zombies.jpeg"
                        alt="zombies"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Web3,NFT </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://www.rareapepes.com">
                    <a target="_blank">RareApepes</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    RareApePe is an innovative NFT platform where users can connect their blockchain wallets to mint unique NFTs, generate custom memes, and explore a vibrant digital art community. The website offers a seamless experience for NFT enthusiasts to create, share, and engage with exclusive digital assets.
                  </p>
                </div>
                <Link legacyBehavior href="https://www.rareapepes.com/">
                  <a className="lnk" target="_blank">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-gifting ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://admindashboard.marwan-mostafa.com">
                    <a target="_blank">
                      <img
                        decoding="async"
                        src="assets/images/projects/recrave/landing.png"
                        alt="Kana"
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
                    <a target="_blank">Recrave</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    ReCrave's internal dashboard streamlines the management of orders, vendors, and products, ensuring smooth operations. While the public site mirrors the functionality, the dashboard is designed for internal use only, safeguarding their real data while offering a comprehensive view of business activities.
                  </p>
                </div>
                <Link legacyBehavior href="https://admindashboard.marwan-mostafa.com">
                  <a className="lnk" target="_blank">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-ecommerce ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://trainhardeg.com/">
                    <a target="_blank">
                      <img
                        decoding="async"
                        src="assets/images/projects/trainhard/products.jpeg"
                        alt="Supplements"
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
                    <a target="_blank">TrainHard</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    TrainHard is a premier supplements store in Egypt, proudly serving customers for over three years. Their website has been a trusted destination for high-quality fitness and health supplements, offering a wide range of products to support fitness enthusiasts and athletes in their wellness journeys.
                  </p>
                </div>
                <Link legacyBehavior href="https://trainhardeg.com/">
                  <a className="lnk" target="_blank">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
        </div>
        {!noViewMore && (
          <div className="load-more-link">
            <Link legacyBehavior href="/works">
              <a
                className="btn scrolla-element-anim-1 scroll-animate"
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
