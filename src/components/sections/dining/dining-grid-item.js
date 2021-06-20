import React from 'react';
import { withRouter } from 'react-router-dom';

const DiningGridItem = (props) => {
  return (
    <div className="dining-grid-item-wrapper">
      <div className="grid-item" onClick={()=> props.history.push('dining-inner/'+props.id)}>
        <div className="dining-title" style={{ backgroundImage: `url(${props.image})`, backgroundPosition:'center', backgroundSize:'cover' }}>
          <h4>{props.title}</h4>
          <div className="slide-hover-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(DiningGridItem);
