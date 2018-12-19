import React from 'react';
import PropTypes from 'prop-types';

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...'
};

Spinner.propType = {
  message: PropTypes.string
};

export default Spinner;
