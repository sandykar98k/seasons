import React from 'react';
import ReactDOM from 'react-dom';

// Components
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      errorMessage: null
    };
  }

  componentDidMount() {
    // This function take some time to get current position.
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      err => {
        this.setState({
          errorMessage: err.message
        });
      }
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          <h1>Error: {this.state.errorMessage} </h1>
        </div>
      );
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <React.Fragment>{this.renderContent()}</React.Fragment>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
