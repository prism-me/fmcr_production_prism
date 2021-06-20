import React from 'react';
import { Carousel } from 'react-responsive-carousel';




const RoomsInnerTitleBlock = (props) => {
  return (
    <div className="rooms-inner-title-block">
      <div className="container">
        <div className="intro-block">
          <div className="slider-item">
            <Carousel
              dynamicHeight={false}
              showStatus={false}
              showArrows={false}
              showIndicators={false}
              showThumbs={true}
              infiniteLoop={true}
              autoPlay={true}
              emulateTouch={true}
              className="room-carousel"
            >
              {
                props.room?.images?.map((x,i) => (
                  <div key={x.id}>
                    <img src={x.avatar} alt="" />
                  </div>
                ))
              }
            </Carousel>
          </div>
          <div className="description-item">
            <h3>{props.room?.post_name}</h3>
            <p dangerouslySetInnerHTML={ {__html: props.room?.post_content}}>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomsInnerTitleBlock;