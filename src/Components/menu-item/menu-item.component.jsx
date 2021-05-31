import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = props => {
  const clickHandler = () => {
    props.history.push(`${props.match.url}${props.linkUrl}`);
  };

  return (
    <div className={`${props.size} menu-item`} onClick={clickHandler}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>
      <div className='content'>
        <h1 className='title'>{props.title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
