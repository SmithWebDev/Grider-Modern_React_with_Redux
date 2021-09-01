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


//Class Based Component
class App extends React.Component {
  //Any new instance is created, the constructor is the first item called.
  //Therefore a good option to initialize state.
  constructor(props) {
    super(props);

    this.state = { lat: null };
  }

  //Class based components MUST define render
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div>Latitude:</div>;
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));

//NOTES
//State - only usable with class based components
//State - a JS object that contains data relevant to a component
//NOTE: it is easy to confuse props with state, be mindful of this
//Updating 'state' on a component causes the component to (almost) instantly render
//State - must be initialized when a component is created
//State - can only be updated using the function 'setState'
