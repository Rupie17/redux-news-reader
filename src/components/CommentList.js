import React from 'react';
import Comment from './Comment';

export default function CommentList({ comments }) {
  if (comments) {
    /* when using round braces dont need return statement.  If you
       use curly braces in the arrow function you need a return statement */
    return (
      <ul className='comments-list'>
        {
          comments.map(comment => (
           <Comment comment={comment} />
           
          ))
        }
      </ul>
    );
  }
  return null;
}