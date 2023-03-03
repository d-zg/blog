
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import PostPreview from '../components/PostPreview';
import CategoryList from '../components/CategoryList';
import { IPost, Category } from '../components/types';

function Home() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    // mock api tests. Will also give a better sense of what the API interface should be
    useEffect(() => {
        fetch('/api/posts')
          .then(response => response.json())
          .then(data => setPosts(data))
          .catch(error => console.log(error));
    
        fetch('/api/categories')
          .then(response => response.json())
          .then(data => setCategories(data))
          .catch(error => console.log(error));
    }, []);

    return (
      <main aria-label="home-page">
        <Hero />
        <section className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                {posts.map(post => (
                  <PostPreview key={post.id} post={post} />
                ))}
              </div>
              <div className="col-md-4">
                <CategoryList categories={categories} />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  export default Home;