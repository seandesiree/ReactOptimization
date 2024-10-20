
import React from 'react';

const PostContent = React.memo(({ content }) => {
  return (
    <div>
      <h3>{content.title}</h3>
      <p>{content.body}</p>
    </div>
  );
});

export default PostContent;