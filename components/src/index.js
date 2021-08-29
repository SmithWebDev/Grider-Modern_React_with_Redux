import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className ='ui container comments'>
      <CommentDetail author="Mike" timeAgo="Yesterday at 9:50pm" avatarImage={faker.image.avatar()} commentText="Nice Blog post!"/>
      <CommentDetail author="Jane" timeAgo="Yesterday at 9:00pm" avatarImage={faker.image.avatar()} commentText="Nice Blog post!"/>
      <CommentDetail author="Alex" timeAgo="Yesterday at 7:40pm" avatarImage={faker.image.avatar()} commentText="Nice Blog post!"/>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
