import React from 'react';

const ContactTitleBlock = (props) => {
  return (
    <div className="contact-title-block">
      <div className="container">
        <h2 className="text-center">Contact Us</h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="contact-title-item">
            <h4>Fishermans Cove Resort</h4>
            <div className="row align-items-center py-1">
              <div className="col-1">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="col-9">
                <p>
                  <a rel="nofollow" href="https://www.google.com/maps/dir//-4.6161678,55.4218931/@-4.616168,55.421893,16z?hl=en">
                  Bel Ombre, Victoria, Mahé, <br />
Seychelles | PO Box 35<br />
                  </a>
                </p>
              </div>
            </div>
            <div className="row align-items-center py-1">
              <div className="col-1">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="col-9">
                <p>
                  <a  rel="nofollow" href="reservations@fishermanscove-resort.com">reservations@fishermans <br />
                  cove-resort.com </a><br />
                </p>
              </div>
            </div>
            <div className="row align-items-center py-1">
              <div className="col-1">
                <i className="fas fa-phone"></i>
              </div>
              <div className="col-9">
                <p>
                <a  rel="nofollow" href="tel:+2484677000">+248 467 7000</a>
                </p>
              </div>
            </div>
            <div className="row align-items-center py-1">
              <div className="col-1">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="col-9">
                <p>
                <a  rel="nofollow" href="https://wa.me/2482816329">+248 281 6329</a>
                </p>
              </div>
            </div>
          </div>
          <div className="contact-title-item contact-map-wrapper">
            <iframe title="contact-form" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8762101037164!2d55.41970441412309!3d-4.616162449621419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x22e02927aaaaaaab%3A0x790c58d365c53629!2sLe%20M%C3%A9ridien%20Fisherman&#39;s%20Cove!5e0!3m2!1sen!2s!4v1610996020682!5m2!1sen!2s" frameborder="0" style={{ border: 'none', width: '100%' }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactTitleBlock;