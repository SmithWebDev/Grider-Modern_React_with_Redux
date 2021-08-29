import React from 'react'
import ReactDOM from 'react-dom'
import Segment from './segment'

const App = (props) => {
  return (
    <div>
      <Segment>
        <div className="ui icon header">
          <i className="pdf file outline icon"></i>
          No documents are listed for this customer.
          <div className="ui primary button">Add Document</div>
        </div>
      </Segment>
      <Segment>
          <h4>For Your Information</h4>
          <p>Amet minima numquam nulla amet quasi minima? Aut consequatur consequatur minima quod vitae sapiente? Et reiciendis quo qui vitae magni! Dolor aliquam deleniti unde dolore voluptatum. Consectetur adipisci voluptatem tempora ducimus corporis Et porro ipsum porro soluta cupiditate. Cupiditate tempora pariatur ipsa eaque repudiandae Elit?</p>
      </Segment>
    </div>
  );
};


//const Segment = () => {
//  return (
//    <div className="ui placeholder segment">
//      <h4>For Your Information</h4>
//      <p>Amet minima numquam nulla amet quasi minima? Aut consequatur consequatur minima quod vitae sapiente? Et reiciendis quo qui vitae magni! Dolor aliquam deleniti unde dolore voluptatum. Consectetur adipisci voluptatem tempora ducimus corporis Et porro ipsum porro soluta cupiditate. Cupiditate tempora pariatur ipsa eaque repudiandae Elit?</p>
//    </div>
//  );
//};

ReactDOM.render(<App />, document.querySelector('#root'));
