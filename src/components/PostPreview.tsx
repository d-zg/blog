// components/PostPreview.js

import React from 'react';
import { PostPreviewProps } from './types'; 

// write unit tests 
function PostPreview(props: PostPreviewProps) {
  const { post } = props 
    return (
    <article className="post-preview">
      <h2>{post.title}</h2>
      <img src={post.featuredImage} alt={post.title} />
      <p>{post.excerpt}</p>
      {/* Link to full post */}
    </article>
  )
}

export default PostPreview