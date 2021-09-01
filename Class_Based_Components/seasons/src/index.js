import React from 'react'
import ReactDOM from 'react-dom'

//Functional based component
//
//const App = () => {
//  window.navigator.geolocation.getCurrentPosition(
//    (position) => console.log(position),
//    (err) => console.log(err)
//  );
//
//
//  return <div>Latitude:</div>
//};


//NOTES
//State - only usable with class based components
//State - a JS object that contains data relevant to a component
//NOTE: it is easy to confuse props with state, be mindful of this
//Updating 'state' on a component causes the component to (almost) instantly render
//State - must be initialized when a component is created
//State - can only be updated using the function 'setState'




//Class Based Component
class App extends React.Component {
  //Any new instance is created, the constructor is the first item called.
  //Therefore a good option to initialize state.
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {

        // Call setState to update the state information. functions should not
        // be found in the render() portion of the class.
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //Class based components MUST define render
  render() {
    return (
      <div>
        Latitude: {this.state.lat} 
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));

