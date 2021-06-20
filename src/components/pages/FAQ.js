import React, { Component } from "react";
import Headertwo from "../layouts/Headertwo";
import Footertwo from "../layouts/Footertwo";
import Mainbanner from "../sections/homepage-two/Banner";
import Bookingform from "../sections/homepage-two/Bookingform";
import BottomNavigator from "../sections/homepage-two/BottomNavigator";
import Subscribe from "../sections/common/Subscribe";
import BreadCrumb from "../layouts/BreadCrumb";
import FAQIntroBlock from "../sections/faq/intro-block";
import { Helmet } from "react-helmet";
const bannerImage = require("./../../assets/img/banner/sunset.jpg");

const breadcrumbItems = [
  {
    text: "Fishermans Cove Resort",
    link: "/",
    isActive: false,
  },
  {
    text: "F.A.Qs",
    link: "/faq",
    isActive: true,
  },
];

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
  {
    question: "How much does a wedding for 150 guests in Seychelles cost?",
    answer: `Depending on how much you plan to spend, a wedding in Seychelles will cost somewhere between $1200 to $10000. Seychelles is home to some of the best wedding resort venues.`,
    category: "dining",
  },
  {
    question: "Can foreigners get married in Seychelles?",
    answer: `Yes, foreigners can get married in Seychelles. The documents need to be submitted 30 days prior to the wedding for verification. It is not necessary for the couple to be present for verification, it can be arranged beforehand. All the documents must be in English or french. If any of the documents are not in English or French they will have to be translated into either language. These documents will then have to be stamped and signed by a solicitor stating that it is the true translation of the original.`,
    category: "policy",
  },
  {
    question: "Can you get married in Seychelles?",
    answer: `Yes, you can. Seychelles has numerous luxury wedding venues. Couples marrying in Seychelles must have a valid passport and birth certificate. ... Ceremonies are conducted by the Registrar per Seychelles Law. The date selected is subject to the Registrar's availability and the ceremony can be arranged Monday - Friday. Additional cost will be incurred if you plan to organize the wedding ceremony over the weekend or public holidays depending on the availability.`,
    category: "policy",
  },

  {
    question: "Do the hotels have the facility to organize Couple Weddings? ",
    answer: `Yes, hotels and resorts in Seychelles have the facility to organize couple weddings and the prices start from 850 Euros depending on the venue.`,
    category: "policy",
  },
  {
    question: "What are the fun activities to do in Seychelles?",
    answer: `There are numerous fun activities to do in Seychelles. Some of the best things to do in Seychelles are Island hopping, chilling on the beach, diving, snorkeling are some of the few activities to do in Seychelles`,
    category: "dining",
  },
  {
    question: "What are the things to do with children?",
    answer: `Seychelles is a fun place to be in and kids would love to visit Beau Vallon Beach, La Digue island. Moreover, you could take them to Botanical Gardens and Sainte Anne Marine National Park is also a nice place to visit.`,
    category: "policy",
  },
  {
    question: "What is Seychelles best known for? ",
    answer: `Seychelles is best known for its crystal clear waters and its beautiful beaches. The place is filled with tropical forests and untouched wonderlands. It’s a place with a rich history and filled with opportunities for leisure activities. `,
    category: "policy",
  },
];

// const breadcrumbItems=[
//   {
//     text: 'Fishermans Cove Resort',
//     link:'/',
//     isActive: false,
//   },
//   {
//     text: 'Weddings',
//     link:'/seychelles-wedding-resort',
//     isActive: true,
//   },
// ]

class FAQ extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>F.A.Q. | Fishermans Cove Resort</title>
          <meta
            name="description"
            content="Situated at Beau Vallon Beach, Fishermans Cove Resort is one of the best resorts in Seychelles offering countless unforgettable experiences throughout your discovery"
          />
        </Helmet>
        <Headertwo
          isMobile={this.props.isMobile}
          isTop={this.props.isTop}
          key={"faq"}
        />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"F.A.Q"} image={bannerImage} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        <div className="bg-white faq-wrapper">
          {/* BREADCRUMBS START */}
          <BreadCrumb items={breadcrumbItems} />
          {/* BREADCRUMBS END */}
          {/*====== INTRO START ======*/}
          <FAQIntroBlock faqList={faqList} />
          {/*====== INTRO END ======*/}
        </div>
        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default FAQ;
