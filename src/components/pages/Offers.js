import React, { Component } from "react";
import Headertwo from "../layouts/Headertwo";
import Footertwo from "../layouts/Footertwo";
import Mainbanner from "../sections/homepage-two/Banner";
import Bookingform from "../sections/homepage-two/Bookingform";
import BottomNavigator from "../sections/homepage-two/BottomNavigator";
import Subscribe from "../sections/common/Subscribe";
import OfferTitleBlock from "../sections/offers/main-text-block";
import OfferGrid from "../sections/offers/offer-grid";
import BreadCrumb from "../layouts/BreadCrumb";
import { Helmet } from "react-helmet";
const bannerImage = require("./../../assets/img/offers/stay.jpg");

const roomsData = [
  {
    title: "10% Off + Dinner for Two",
    link: "",
    linkText: "View More",
    description: `<p>Start your incredible journey today.</p>
      <p>Offering countless experiences throughout the journey, Fishermans Cove is a veritable paradise perfect
      for explorers, romantic couples, and families alike. The resort offers tailored packages to make your stay
      at Fishermens Cove a memorable one.</p>
      <p>Make your ordinary vacation, extraordinary with 10% off at Fishermans Cove Resort. Book your stay
      now and get a complimentary dinner for two at Le Cardinal Restaurant.</p>`,
    image: require("./../../assets/img/offers/dinner-for-two.jpeg"),
  },
  // {
  //   title: "Long Stay with snorkeling",
  //   link: "",
  //   linkText: "View More",
  //   description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
  //   image: require('./../../assets/img/offers/snorkeling.jpg')
  // },
  // {
  //   title: "Long stay with fishing",
  //   link: "",
  //   linkText: "View More",
  //   description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
  //   image: require('./../../assets/img/offers/fishing.jpg')
  // },
  // {
  //   title: "Full board Package",
  //   link: "",
  //   linkText: "View More",
  //   description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
  //   image: require('./../../assets/img/offers/package.jpg')
  // },
  // {
  //   title: "Save 25% on long stays",
  //   link: "",
  //   linkText: "View More",
  //   description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
  //   image: require('./../../assets/img/offers/stay.jpg')
  // },
  // {
  //   title: "book early and save more",
  //   link: "",
  //   linkText: "View More",
  //   description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
  //   image: require('./../../assets/img/offers/book.jpg')
  // },
  // {
  //   title: "Honeymoon Offer",
  //   link: "",
  //   linkText: "View More",
  //   description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
  //   image: require('./../../assets/img/offers/honeymoon.jpg')
  // },
];

const breadcrumbItems = [
  {
    text: "Fishermans Cove Resort",
    link: "/",
    isActive: false,
  },
  {
    text: "Offers",
    link: "/offers",
    isActive: true,
  },
];

class Offers extends Component {
  render() {
    return (
      <div className="bg-white">
        <Helmet>
          <title>
            Best Beach Resorts in Seychelles | Fishermans Cove Resort
          </title>
          <meta
            name="description"
            content="Situated at Beau Vallon Beach, Fishermans Cove Resort is one of the best resorts in Seychelles offering countless unforgettable experiences throughout your discovery"
          />
        </Helmet>
        <Headertwo
          isMobile={this.props.isMobile}
          isTop={this.props.isTop}
          key={"offers"}
        />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Offers"} image={bannerImage} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== TITLE START ======*/}
        <OfferTitleBlock />
        {/*====== TITLE END ======*/}
        {/*====== ROOM GRID START ======*/}
        <OfferGrid title={null} data={roomsData} />
        {/*====== ROOM GRID END ======*/}
        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default Offers;
