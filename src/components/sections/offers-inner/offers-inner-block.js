import React from "react";
import { Link } from "react-router-dom";

const OffersInnerMainBlock = (props) => {
  return (
    <div className="main-block">
      <div className="container">
        <h2 style={{ textTransform: "capitalize" }}>
          Spend your dream vacation with us!
        </h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="main-item img-wrapper">
            <img
              alt=""
              src={require("./../../../assets/img/offers/dinner-for-two.jpeg")}
            />
          </div>
          <div className="main-item pl-sm-4">
            <p
              className="text-left mb-2 mr-sm-4"
              style={{ fontSize: "20px", fontWeight: 600 }}
            >
              Stay and Save With Fishermans Cove Resort + Dinner For Two
            </p>
            <p className="text-justify mb-2">
              Offering countless experiences throughout the journey, Fishermans
              Cove is a veritable paradise perfect for explorers, romantic
              couples, and families alike. The resort offers tailored packages
              to make your stay at Fishermens Cove a memorable one.
            </p>
            <p>
              Make your ordinary vacation, extraordinary with 10% off at
              Fishermans Cove Resort. Book your stay now and get a complimentary
              dinner for two at Le Cardinal Restaurant.
            </p>
            {/* <h6 className="mv"> */}
            {/* All for AED 4000/- only
              <br /> */}
            {/* <small>Terms &amp; Conditions applied.</small>
            </h6> */}
            {/* <div className="share-block">
              <p>Share with friends and family</p>
              <div className="share-social-links">
                <a href="https://www.facebook.com/fishermanscoveresort/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/fisherman_cove">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://wa.me/2482816329">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://www.instagram.com/fishermanscove.resort/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div> */}
            <div className="reservations-block mt-3">
              <p>For Reservations</p>
              <div className="contact-links">
                <div>
                  <i className="fas fa-phone pr-2"></i>
                  <a href="tel:+2484677000">+248 467 7000</a>
                </div>
                <div className="pl-md-4">
                  <i className="fas fa-envelope pr-2"></i>
                  <a href="mailto:reservations@fishermanscove-resort.com">
                    reservations@fishermanscove-resort.com
                  </a>
                </div>
              </div>
            </div>
            {/* <hr /> */}
            <div className="mt-4">
              <Link
                to="#"
                onClick={() =>
                  window.gtag_report_conversion(
                    "https://be.synxis.com/?Hotel=31842&Chain=27304&promo=LeCardinal"
                  )
                }
                className="btn btn-eden main-btn mx-auto d-inline-block"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="back-to text-center mt-4">
          <Link
            to="/offers"
            className="btn btn-eden main-btn mx-auto d-inline-block"
          >
            Back to all offers
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default OffersInnerMainBlock;
