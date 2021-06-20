import React from 'react';

const WeddingTitleBlock = (props) => {
  return (
    <div className="wedding-title-block">
      <div className="container">
        <h2 className="text-center">Wedding in Seychelles</h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="wedding-title-item">
            <p className="text-justify mr-sm-4 mb-2">Located at the tip of the popular Beau Vallon Bay, overlooking the coral reefs of the Indian ocean, Fishermans Cove Resort offers an authentic and spectacular venue for your wedding experience, which resonates with unique cultural and natural diversity.
Get married on a beach or on the pontoon that offers a unique setting to exchange wedding vows with an amazing ocean view sunset as a backdrop.
<br />
<br/> We can even take care of all the legal documents that are required for the ceremony as well as the event through tailor-made packages which make Fishermans Cove one of the top wedding and event venues in Seychelles</p>
          </div>
          <div className="wedding-title-item img-wrapper">
            <img alt="" src={require('./../../../assets/img/banner/wedding.jpg')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeddingTitleBlock;