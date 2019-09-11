import React from 'react';
import Fries from '../img/fries.jpg';
import PropTypes from 'prop-types';

function Feed(props) {
  return (
    <div>
    <button onClick={props.onFeed}><img src={Fries} alt="my image" /></button>
    </div>
  );
}

Feed.propTypes = {
  onFeed: PropTypes.func.isRequired
}
export default Feed;
