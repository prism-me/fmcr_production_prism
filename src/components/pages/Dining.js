import React, { Component } from "react";
import Headertwo from "../layouts/Headertwo";
import Footertwo from "../layouts/Footertwo";
import Mainbanner from "../sections/homepage-two/Banner";
import Bookingform from "../sections/homepage-two/Bookingform";
import BottomNavigator from "../sections/homepage-two/BottomNavigator";
import DiningTitleBlock from "../sections/dining/main-text-block";
import DiningGrid from "../sections/dining/dining-grid";
// import DiningOfferSlider from '../sections/dining/dining-offer-sldier';
import Subscribe from "../sections/common/Subscribe";
import BreadCrumb from "../layouts/BreadCrumb";
import API from "../../utils/http";
import FAQSection from "../sections/common/FAQSection";
import { Helmet } from "react-helmet";
const bannerImage = require("./../../assets/img/banner/dining.jpg");

const faqList = [
  {
    question:
      "What are the best hotels with restaurants in Seychelles Victoria?",
    answer: `Here is a list of some of the popular hotels and resorts with restaurants and dining bars in Seychelles.
     STORY Seychelles Resort ,
    Six Senses Zil Pasyon ,
    La Digue Lodge ,
    Constance Lemuria ,
    Fishermans Cove Resort.
    `,
    category: "dining",
  },
  {
    question:
      "Which hotels with restaurants in Seychelles Victoria are romantic?",
    answer: `There are a number of restaurants and resorts in Seychelles that can be considered for romantic dinners. Here are some of the suggestions.
    STORY Seychelles Resort ,
Four Seasons Resort Seychelles ,
Anantara Maia Seychelles Villas ,
Fishermans Cove Resort ,
Constance Lemuria.

    `,
    category: "policy",
  },
  {
    question: "Is Seychelles expensive in terms of eating and drinking?",
    answer: `Seychelles restaurants can sometimes be expensive. However, there are countless options to choose from and it depends on how much you are willing to spend. There is no end to luxury so be smart while planning to go out.`,
    category: "policy",
  },

  {
    question: "What should I eat in Seychelles Victoria? ",
    answer: `Here is a list of some of the best fine dining restaurants in Seychelles Victoria.
    Marie-Antoinette ,
    Papagalo ,
    Coco Blu ,
    Le Rendevous Café ,
    Paris Seychelles Restaurant .
    `,
    category: "policy",
  },
];

const breadcrumbItems = [
  {
    text: "Fishermans Cove Resort",
    link: "/",
    isActive: false,
  },
  {
    text: "Dining",
    link: "/fine-dining-seychelles",
    isActive: true,
  },
];

class Dining extends Component {
  state = {
    diningData: [],
  };

  componentDidMount() {
    try {
      API.get("/dining").then((response) => {
        this.setState({ diningData: response.data });
      });
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="bg-white">
        <Helmet>
          <title>
          Restaurants in Seychelles Mahe | Fishermans Cove Resort
          </title>
          <meta
            name="description"
            content="The resort has two of the best restaurants and bars in Seychelles that allow you to savor scrumptious flavors while enjoying the Indian Ocean’s spectacular sunset."
          />
        </Helmet>
        <Headertwo
          isMobile={this.props.isMobile}
          isTop={this.props.isTop}
          key={"dining"}
        />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Dining"} image={bannerImage} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== TITLE START ======*/}
        <DiningTitleBlock />
        {/*====== TITLE END ======*/}
        {/*====== ROOM GRID START ======*/}
        <DiningGrid title={null} data={this.state.diningData} />
        {/*====== ROOM GRID END ======*/}
        {/*====== SUITES GRID START ======*/}
        {/* <DiningOfferSlider title={"Offers"} data={offersData} /> */}
        {/*====== SUITES GRID END ======*/}

        <FAQSection faqList={faqList} />
        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default Dining;
