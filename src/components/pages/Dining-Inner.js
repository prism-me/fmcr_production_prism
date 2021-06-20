import React, { Component } from "react";
import Headertwo from "../layouts/Headertwo";
import Footertwo from "../layouts/Footertwo";
import Mainbanner from "../sections/homepage-two/Banner";
import Bookingform from "../sections/homepage-two/Bookingform";
import BottomNavigator from "../sections/homepage-two/BottomNavigator";
// import DiningOfferSlider from '../sections/dining/dining-offer-sldier';
import DiningInnerTitleBlock from "../sections/dining-inner/main-text-block";
import DiningInnerInfo from "../sections/dining-inner/dining-grid";
import OtherRecommendations from "../sections/dining-inner/dining-inner-grid-item";
import Subscribe from "../sections/common/Subscribe";
import BreadCrumb from "../layouts/BreadCrumb";
import API from "../../utils/http";
import FAQSection from "../sections/common/FAQSection";
import { Helmet } from "react-helmet";

// const breadcrumbItems=[
//   {
//     text: 'Fishermans Cove Resort',
//     link:'/',
//     isActive: false,
//   },
//   {
//     text: 'Dining',
//     link:'/fine-dining-seychelles',
//     isActive: true,
//   },
// ]
const offersData = [
  {
    title: "Family Suite Garden View",
    link: "",
    linkText: "View More",
    description:
      "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require("./../../assets/img/banner/home.jpg"),
  },
  {
    title: "Family Suite Garden View",
    link: "",
    linkText: "View More",
    description:
      "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require("./../../assets/img/banner/about.jpg"),
  },
  {
    title: "Family Suite Garden View",
    link: "",
    linkText: "View More",
    description:
      "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require("./../../assets/img/banner/dining.jpg"),
  },
  {
    title: "Family Suite Garden View",
    link: "",
    linkText: "View More",
    description:
      "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require("./../../assets/img/banner/rooms.jpg"),
  },
];

const faqList = [
  //sunset
  {
    id: 17,
    question: "What is there to do in Seychelles at night?",
    answer: `One prospect can be to dance all night in one of the many night clubs in Seychelles. Thanks to its tropical nature, the city allows guests to sit outside and enjoy the ocean breeze with a hint of lively music`,
    category: "dining",
  },
  {
    id: 17,
    question: "Can you drink alcohol in Seychelles?",
    answer: `Hotels and bars in Seychelles are allowed to serve alcohol while having a license. It is not advisable to drink in public places so the tourists should be careful and considerate of the local culture.`,
    category: "policy",
  },
  {
    id: 17,
    question: "Is Seychelles a party place?",
    answer: `Seychelles is not considered to be a party place and it is not known for its nightlife. Tourists will have to settle for calm and chill evenings. There aren’t many hotels and Casinos though there are some options but mostly hotels and resorts take this responsibility of entertaining guests.`,
    category: "policy",
  },

  {
    id: 17,
    question: "What are the best areas to stay in Seychelles?",
    answer: `Here are some areas suited for different kinds of tourists. Victoria is the best place to go for first-timers. Beau Vallon is one of the most visited places in Seychelles. Praslin is the place to go for tourists looking for Nightlife. La Digue is considered to be the coolest place to go and Mahe is the best place to be for families.`,
    category: "policy",
  },
  //paris seychelles
  {
    id: 15,
    question: "Is it expensive to eat out in Seychelles?",
    answer: `There are numerous restaurants in Seychelles, Victoria and the cost of eating out can vary. However, the average cost of lunch and dinner is SCR 560 per day. Breakfasts are usually a bit cheaper.`,
    category: "policy",
  },

  {
    id: 15,
    question: "What is Seychelles known for?",
    answer: `Seychelles is known for its deep blue waters and yet unspoiled shores. However, there is much more to Seychelles than just a remote island including fine dining restaurants and luxurious resorts.`,
    category: "policy",
  },

  {
    id: 15,
    question: "How many days are enough to explore Seychelles?",
    answer: `The Island is around 17 miles long. Scheduling three nights and four days would allow tourists to explore enough attractions including beaches, bars, and restaurants in Seychelles.`,
    category: "policy",
  },

  //lecocoloba
  {
    id: 16,
    question: "Is Seychelles expensive to eat?",
    answer: `The prices at Seychelles bars and restaurants can vary. There are numerous options to choose from and there is no end to luxury so visitors need to be careful and spend according to their budget.`,
    category: "policy",
  },

  {
    id: 16,
    question: "Is Seychelles better than the Maldives?",
    answer: `Seychelles is comparatively larger and there is much more to explore than the Maldives. Moreover, Seychelles is home to some of the rarest species of fauna and flora. Having some of the most beautiful diving sites, it is a paradise for divers.  Mahé is the main island and it is home to Seychelles' best restaurants and hotels.`,
    category: "policy",
  },

  {
    id: 16,
    question: "What are Seychelles best bars and clubs?",
    answer: `Here is a list of some of the famous bars and clubs in Seychelles.
  Club Liberte Casino
  Beach Shak
  Bar Ocean View
  Honesty Bar
  Rogan’s Irish Bar
  Katiolo Night Club
  Trader Vicks
  1502
  `,
    category: "policy",
  },
  {
    id: 16,
    question: "Where in Seychelles can we enjoy nightlife?",
    answer: `One of the best places to enjoy the nightlife in Seychelles is Katiolo. Due to its tropical nature, the open-air party vibe is amazing. `,
    category: "policy",
  },

  //le cardinal

  {
    id: 18,
    question: "Is veg food available in Seychelles?",
    answer: `There are a number of Seychelle restaurants that are vegetarian friendly, mainly in Mahe islands and La Digue. Some of the vegetarian-friendly restaurants include Rey and Josh Café, Mi Mum’s Takeaway, Les Rochers, and Mimi’s Café.`,
    category: "policy",
  },

  {
    id: 18,
    question: "Is Seychelles expensive to eat?",
    answer: `Prices can vary due to several factors. Primarily due to a huge number of fine dining restaurants in Seychelles However, the average price per day is somewhere around SCR 569. Dinner is considered to be expensive as compared to breakfast. There is something for every price range in the city.`,
    category: "policy",
  },

  {
    id: 18,
    question: "What foods do they eat in Seychelles?",
    answer: `Some of the common staple foods including fish, shellfish dishes, and seafood dishes are famous and are eaten with rice. Curry dishes with rice are generally well-liked. Seafood is cooked in different ways such as steamed, grilled, baked, and salted.`,
    category: "policy",
  },
  {
    id: 18,
    question: "How much money do I need for Seychelles?",
    answer: `According to visitors who have spent some time in Seychelles, the average daily budget should be around $105. Though it varies and numerous factors need to be taken into consideration. However, tourists should at least keep this amount in mind.`,
    category: "policy",
  },
];

let breadcrumbItems = [
  {
    text: "Fishermans Cove Resort",
    link: "/",
    isActive: false,
  },
  {
    text: "Dining",
    link: "/fine-dining-seychelles",
    isActive: false,
  },
  {
    text: "",
    link: "/dining-inner",
    isActive: true,
  },
];
class DiningInner extends Component {
  state = {
    singleHotel: {},
    othersData: [],
    pageSections: [],
  };

  async componentDidMount() {
    let id = this.props.match.params.id;
    try {
      const response = await API.get("/dining/" + id);
      let singleHotel = response?.data?.category_details[0];
      singleHotel.images = response?.data?.uploads?.filter(
        (x) => x["360_view"] === ""
      );
      breadcrumbItems[breadcrumbItems.length - 1].text = singleHotel.post_name;
      breadcrumbItems[breadcrumbItems.length - 1].link =
        "/dining-inner/" + singleHotel.id;
      this.setState({ singleHotel });

      const sectionsResonse = await API.get("/all_sections/" + id);
      this.setState({ pageSections: sectionsResonse?.data });

      API.get("/dining").then((othersResponse) => {
        this.setState({
          othersData:
            othersResponse.data.filter(
              (x) => x.id !== this.state.singleHotel?.id
            ) || [],
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="bg-white dining-inner-wrapper">
        {this.state.singleHotel?.id ? (
          <Helmet>
            <title>
              {`${this.state.singleHotel?.post_name} | Fishermans Cove Resort`}
            </title>
            <meta
              name="description"
              content="The resort has two of the best restaurants and bars in Seychelles that allow you to savor scrumptious flavors while enjoying the Indian Ocean’s spectacular sunset."
            />
          </Helmet>
        ) : (
          <Helmet>
            <title>
              Best Beach Resorts in Seychelles | Fishermans Cove Resort
            </title>
            <meta
              name="description"
              content="Situated at Beau Vallon Beach, Fishermans Cove Resort is one of the best resorts in Seychelles offering countless unforgettable experiences throughout your discovery"
            />
          </Helmet>
        )}
        <Headertwo
          isMobile={this.props.isMobile}
          isTop={this.props.isTop}
          key={"dining-inner"}
        />
        {/*====== BANNER PART START ======*/}
        <Mainbanner
          title={this.state.singleHotel?.post_name}
          image={
            this.state.singleHotel?.images?.[
              this.state.singleHotel?.images?.length - 1
            ]?.avatar
          }
        />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== TITLE START ======*/}
        <DiningInnerTitleBlock
          dining={this.state.singleHotel}
          introSection={this.state.pageSections?.find(
            (x) => x.section_slug === "intro"
          )}
        />
        {/*====== TITLE END ======*/}
        {/*====== ROOM GRID START ======*/}
        <DiningInnerInfo
          timingSection={this.state.pageSections?.find(
            (x) => x.section_slug === "timings"
          )}
          dressSection={this.state.pageSections?.find(
            (x) => x.section_slug === "dress"
          )}
        />
        {/*====== ROOM GRID END ======*/}
        {/*====== SUITES GRID START ======*/}
        {/* <DiningOfferSlider title={"Offers"} data={offersData} /> */}
        {/*====== SUITES GRID END ======*/}
        {/*====== OTHERS GRID START ======*/}
        <OtherRecommendations
          title={"Other Restaurants & Bars"}
          data={this.state.othersData}
        />
        {/*====== OTHERS GRID END ======*/}

        <FAQSection
          faqList={faqList.filter((x) => x.id == this.state.singleHotel?.id)}
        />

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default DiningInner;
