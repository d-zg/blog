import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '../components/types';

function fetchPost(postId: string) {
    return fetch(`/api/posts/${postId}`)
      .then((response) => response.json());
}

function Post() {
  const [post, setPost] = useState<IPost | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { postId } = useParams<{ postId: string }>();

  useEffect(() => {
    fetchPost(postId ? postId : "")
      .then((data) => setPost(data))
      .catch((error) => setError(error.message));
  }, [postId]);

  if (error) {
    return <div role="alert">{error}</div>;
  }

  if (!post) {
    return <div role="status" aria-label="post-page">Loading...</div>;
  }

  return (
    <main aria-label="post-page">
      <article className="post">
        <h1>{post.title}</h1>
        <img src={post.featuredImage} alt={post.title} />
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </article>
    </main>
  );
}

export default Post;