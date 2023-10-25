import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer bg-gray-900 text-white py-8 absolute bottom-0 w-full">
      <div className="container mx-auto h-fit">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
          <div className="col-span-1 lg:col-span-4 lg:col-start-1">
            <p>
              <span>Copyright © Indian Oil Corporation Ltd</span> <br />{" "}
              <span>
                <a href="/pages/sitemap">Site Map</a> |{" "}
                <a
                  href="javascript:void(0);"
                  data-toggle="modal"
                  data-target="#termsContent"
                >
                  Terms of Use
                </a>{" "}
                |{" "}
                <a
                  href="javascript:void(0);"
                  data-toggle="modal"
                  data-target="#privacyContent"
                >
                  Data Privacy Policy
                </a>{" "}
                |{" "}
                <a
                  href="javascript:void(0);"
                  data-toggle="modal"
                  data-target="#HyperlinkContent"
                >
                  Hyperlinking Policy
                </a>
              </span>
            </p>
          </div>
          <div className="col-span-1 lg:col-span-3 lg:col-start-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="col-span-1">
                <p className="text-center">
                  <span>Toll FREE Number: 1800-2333-555</span>
                  <br />
                  <span>Commercial LPG Helpline No. 1860-5991-111</span>
                  <br />
                  <span>Last updated on 25/10/2023 03:41 PM</span>
                </p>
              </div>
              <div className="col-span-1">
                <p className="text-center">
                  <span>LPG Emergency Helpline: 1906</span>
                  <br />
                  <span>
                    <a
                      href="https://www.planetecomsolutions.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Powered By PECS
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-span-1 lg:col-span-1">
            <div className="text-right">
              <a
                href="https://spandan.indianoil.co.in/SBA/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/images/swachh-bharatW.png"
                  alt="swachh bharat"
                />
              </a>{" "}
              <a
                href="https://www.india.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/images/india_gov_in.png" alt="india.gov.in" />
              </a>{" "}
              <a
                href="https://www.ncwwomenhelpline.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/images/logo-NCW.png"
                  alt="logo-NCW"
                  style={{ width: "100px" }}
                />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
