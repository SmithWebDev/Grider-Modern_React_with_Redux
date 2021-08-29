import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author="Mike"
          timeAgo="Yesterday at 9:50pm"
          avatarImage={faker.image.avatar()}
          commentText="Nice Blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          timeAgo="Yesterday at 9:00pm" 
          avatarImage={faker.image.avatar()} 
          commentText="Nice Blog post!" 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Alex" 
          timeAgo="Yesterday at 7:40pm" 
          avatarImage={faker.image.avatar()} 
          commentText="Nice Blog post!" 
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
