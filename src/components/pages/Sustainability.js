import React, { Component } from "react";
import Headertwo from "../layouts/Headertwo";
import Footertwo from "../layouts/Footertwo";
import Mainbanner from "../sections/homepage-two/Banner";
import Bookingform from "../sections/homepage-two/Bookingform";
import BottomNavigator from "../sections/homepage-two/BottomNavigator";
import Subscribe from "../sections/common/Subscribe";
import SustainIntroBlock from "../sections/sustainability/intro-block";
import SustainPillarsBlock from "../sections/sustainability/pillars-block";
import SustainProjectsBlock from "../sections/sustainability/projects-block";
import SustainEngeryBlock from "../sections/sustainability/energy-conservation";
import BreadCrumb from "../layouts/BreadCrumb";
import { Helmet } from "react-helmet";

const bannerImage = require("./../../assets/img/banner/Sustainability-banner.jpg");

const breadcrumbItems = [
  {
    text: "Fishermans Cove Resort",
    link: "/",
    isActive: false,
  },
  {
    text: "Sustainability",
    link: "/seychelles-eco-resort ",
    isActive: true,
  },
];

class Sustainability extends Component {
  render() {
    return (
      <div className="bg-white sustainability-wrapper">
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
          key={"sustainability"}
        />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Sustainability"} image={bannerImage} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== INTRO START ======*/}
        <SustainIntroBlock />
        {/*====== INTRO END ======*/}
        {/*====== PILLARS START ======*/}
        <SustainPillarsBlock />
        {/*====== PILLARS END ======*/}
        {/*====== PROJECTS SLIDER START ======*/}
        <SustainProjectsBlock />
        {/*====== PROJECTS SLIDER END ======*/}
        <SustainEngeryBlock />
        {/*====== PROJECTS SLIDER END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default Sustainability;
