import React from 'react';
import Zzz from '../img/zzz.png'
import PropTypes from 'prop-types'

function Rest (props) {

  return (
    <div>
    <button onClick={props.onRest}><img src={Zzz} alt="my image" /></button>
    </div>
  );
}

Rest.propTypes = {
  onRest: PropTypes.func.isRequired
}

export default Rest;
