import React from 'react';
import Ball from '../img/ball.jpg'
import PropTypes from 'prop-types';

function Play (props) {

  return (
    <div>
    <button onClick={props.onPlay}><img src={Ball} alt="my image" /></button>
    </div>
  );
}

Play.propTypes = {
  onPlay: PropTypes.func.isRequired
}

export default Play;
