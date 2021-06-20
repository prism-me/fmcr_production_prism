import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import RoomTitleBlock from '../sections/room-suites/main-text-block';
import RoomSuiteGrid from '../sections/room-suites/room-suites-grid';
import Subscribe from '../sections/common/Subscribe';
import BreadCrumb from '../layouts/BreadCrumb';
import API from '../../utils/http';
import { Helmet } from 'react-helmet';

const bannerImage = require('./../../assets/img/banner/rooms.jpg');



const breadcrumbItems = [
  {
    text: 'Fishermans Cove Resort',
    link: '/',
    isActive: false,
  },
  {
    text: 'Rooms & Suites',
    link: '/rooms-suites-seychelles',
    isActive: true,
  },
]

class RoomSuites extends Component {
  state = {
    roomsData: [],
    suitesData: [],
  }

  componentDidMount() {
    try {
      API.get('/rooms').then(response=>{
        const roomsData = response.data.filter(x=> x.room_type==1);
        const suitesData = response.data.filter(x=> x.room_type==2);
        this.setState({ roomsData, suitesData });
      })
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="bg-white">
        <Helmet>
          <title>Best Rooms &amp; Suites in Seychelles at Fishermans Cove Resort</title>
          <meta
            name="description"
            content="These are among the best hotel rooms and suites in Mahe, Seychelles providing guests with an amazing facilities and a view of the ocean at their doorsteps."
          />
        </Helmet>
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop} key={'room-suites'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Inherited Paradise"} image={bannerImage} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== TITLE START ======*/}
        <RoomTitleBlock />
        {/*====== TITLE END ======*/}
        {/*====== ROOM GRID START ======*/}
        <RoomSuiteGrid title={"Rooms"} data={this.state.roomsData} />
        {/*====== ROOM GRID END ======*/}
        {/*====== SUITES GRID START ======*/}
        <RoomSuiteGrid title={"Suites"} data={this.state.suitesData} />
        {/*====== SUITES GRID END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default RoomSuites;
