import React, { Component } from "react";
import Headertwo from "../layouts/Headertwo";
import Footertwo from "../layouts/Footertwo";
import Mainbanner from "../sections/homepage-two/Banner";
import Bookingform from "../sections/homepage-two/Bookingform";
import BottomNavigator from "../sections/homepage-two/BottomNavigator";
import Subscribe from "../sections/common/Subscribe";
import LeisureContentBlocks from "../sections/leisure-inner/content-blocks";
import BreadCrumb from "../layouts/BreadCrumb";
import FAQSection from "../sections/common/FAQSection";
import { Helmet } from "react-helmet";
const bannerImage = require("./../../assets/img/banner/Leisure-inner.jpg");

const activities = [
  {
    title: "Water Activities",
    content: `If you call yourself an adrenaline junkie, you’ve come to the right place. We have a range of thrilling motorized and non-motorized watersports for you to enjoy including jet-ski, kayaking, water skiing, knee boarding, parasailing.`,
    image: require("./../../assets/img/leisure/water.jpg"),
  },
  {
    title: "Snorkeling",
    content: `Uncover the beauty of the underwater world with some snorkeling experience. Enjoy seeing shoals of brightly colored fish, a number of unique types of turtles, Rays, and much more. Drift through warm water enjoying underwater life through crystal clear water. Snorkeling is one of the best things to do in Seychelles`,
    image: require("./../../assets/img/leisure/snorkling.jpg"),
  },
  {
    title: "Unlock the Sea",
    content: `Discover the treasure trove of marine life in Seychelles through a curated snorkeling experience with Fishermans Cove. Explore pristine white sands lapped by topaz waters, coral sunsets, and ignite your inspiration with an underwater encounter that leaves you with incredible memories of the island. Encounter the unexpected. Discover our underwater-sculpted tortoise and send a postcard from under the sea.`,
    image: require("./../../assets/img/leisure/unlock-sea.jpg"),
  },
  {
    title: "Coral Cove",
    content: `With a continuous effort to enhance our commitment towards preserving the marine ecosystem around the resort, we present you with the coral reef restoration program, an extension to “Unlock the Sea”. You can now learn more about corals or even adopt one and receive regular updates of its growth and GPS coordinates after transplantation onto the reef.`,
    image: require("./../../assets/img/leisure/coral.jpg"),
  },
  {
    title: "Gym & Fitness",
    content: `Available from our sister resort, the gym is equipped with state-of-the-art ‘life fitness’ cardio equipment and free weights. Personal trainers are always available for a private consultation. Open 24h/day`,
    image: require("./../../assets/img/leisure/gym.jpg"),
  },
  {
    title: "Island Hopping",
    content: `A visit to Seychelles cannot be completed without a full day of island hopping. Seychelles is full of stunning locations to visit. Island hopping is one of the most popular activities in Seychelles and it can either be done with a trusted tour guide or at your leisure. However, Praslin, La Digue, and Sainte Anne Marine National Park are just a few of the must-visit places while visiting the paradise on earth.`,
    image: require("./../../assets/img/leisure/island-hoping.jpg"),
  },
  {
    title: "Diving in Seychelles",
    content: `Indulge in diving and snorkeling  activities to explore the vast underwater world in Seychelles. Seychelles has one of the best diving locations in the world. You can explore long lost shipwrecks, coral reefs and submerged granite formations. Sightings of amazing marine life is not uncommon either. October to May is the best time for diving because of pleasant weather and increased visibility.`,
    image: require("./../../assets/img/leisure/divin.jpg"),
  },
  {
    title: "Fishing in Seychelles",
    content: `Seychelles’ pleasant weather and tropical climate make it perfect for fishing adventures. Seychelles rich marine life is an attraction for play fishers from around the world. You can expect to catch bonito, dorado, sailfish, tuna and wahoo in abundance. More varieties can also be found further out. 
    It is not required to have a fishing license and recreational fishing is allowed so tourists can engage in fishing activities without any hassle. However, it is advisable to the tourists to bring their own equipment so that they don’t encounter any hurdles. 
    `,
    image: require("./../../assets/img/leisure/fishing.jpg"),
  },
  {
    title: "Kayaking in Seychelles",
    content: `Seychelles is one of the best Kayaking destinations because of its pure waters and a huge number of peaceful, secluded islands. Kayaks can travel from one island to another discovering hidden coves that ordinary tourists can’t explore and also see various landmarks while enjoying the calmness of nature.
    Kayaking allows tourists to completely forget about modern life and immerse themselves in wilderness. The only disturbance there is the sound of you peddling and the splashing water. Kayaking experiences require no prior experience and beginners can dive right into it. 
    `,
    image: require("./../../assets/img/leisure/kayaking.jpg"),
  },
];

const faqList = [
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

const breadcrumbItems = [
  {
    text: "Fishermans Cove Resort",
    link: "/",
    isActive: false,
  },
  {
    text: "Leisure Activities",
    link: "/whats-on",
    isActive: false,
  },
  {
    text: "Other Resort Activities",
    link: "/leisure-inner",
    isActive: true,
  },
];

class LeisureInner extends Component {
  render() {
    return (
      <div className="bg-white leisure-inner-wrapper">
        <Helmet>
          <title>
            Other Resort Activities | Fishermans Cove Resort
            {/*Best Beach Resorts in Seychelles | Fishermans Cove Resort*/}
          </title>
          <meta
            name="description"
            content="Situated at Beau Vallon Beach, Fishermans Cove Resort is one of the best resorts in Seychelles offering countless unforgettable experiences throughout your discovery"
          />
        </Helmet>
        <Headertwo
          isMobile={this.props.isMobile}
          isTop={this.props.isTop}
          key={"leisure-inner"}
        />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Other Resort Activities"} image={bannerImage} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/*====== BANNER PART ENDS ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== INTRO START ======*/}
        <LeisureContentBlocks activities={activities} />
        {/*====== INTRO END ======*/}

        <FAQSection faqList={faqList} />

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default LeisureInner;
