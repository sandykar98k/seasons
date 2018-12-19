import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  winter: { text: 'Burr, it is chilly', iconName: 'snowflake' },
  summer: { text: "Let's hit the beach", iconName: 'sun' }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon ${iconName} massive icon-left`} />
      <h1 className="message">{text}</h1>
      <i className={`icon ${iconName} massive icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
