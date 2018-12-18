import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    // This function take some time to get current position.
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return (
      <div>
        <h1>Lattitude: </h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
