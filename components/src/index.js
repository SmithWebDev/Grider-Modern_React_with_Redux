import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className ='ui container comments'>
      <CommentDetail />
      <div className="comment">
        <a className="avatar" href="/"><img alt="avatar" src={faker.image.avatar()}/></a>
        <div className="content">
          <a className="author" href="/">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00pm</span>
          </div>
          <div className="text">Nice Blog post!</div>
        </div>
      </div>
      <div className="comment">
        <a className="avatar" href="/"><img alt="avatar" src={faker.image.avatar()}/></a>
        <div className="content">
          <a className="author" href="/">
            Adam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00pm</span>
          </div>
          <div className="text">Nice Blog post!</div>
        </div>
      </div>
      <div className="comment">
        <a className="avatar" href="/"><img alt="avatar" src={faker.image.avatar()}/></a>
        <div className="content">
          <a className="author" href="/">
            Matt
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00pm</span>
          </div>
          <div className="text">Nice Blog post!</div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
