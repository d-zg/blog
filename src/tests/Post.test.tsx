import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";  // optional
import Post from '../pages/Post';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { IPost } from '../components/types';

describe('Post component', () => {
    test('displays loading message when post is null', () => {
      render(<Post />);
      expect(screen.getByRole('status')).toHaveTextContent('Loading...');
    });
  
    test('displays post when it is loaded', async () => {
      const mockPost = {
        title: 'Test Post',
        featuredImage: 'https://example.com/test.jpg',
        content: '<p>This is a test post.</p>',
      } as IPost;
  
      jest.spyOn(window, 'fetch').mockResolvedValueOnce({
        ok: true,
        json: async () => mockPost,
      } as Response);
  
      render(
        <MemoryRouter initialEntries={[`/posts/123`]}>
          <Routes>
             <Route path="/posts/:postId" element={<Post />} />
          </Routes>
        </MemoryRouter>
      );
  
      expect(screen.getByRole('status')).toHaveTextContent('Loading...');
  
      const postTitle = await screen.findByText(mockPost.title);
      const postImage = await screen.findByAltText(mockPost.title);
      const postContent = await screen.findByText(mockPost.content);
  
      expect(postTitle).toBeInTheDocument();
      expect(postImage).toBeInTheDocument();
      expect(postContent).toBeInTheDocument();
    });
  
    test('displays error message when post fetch fails', async () => {
      jest.spyOn(window, 'fetch').mockRejectedValueOnce(new Error('Fetch error'));
  
      render(
        <MemoryRouter initialEntries={[`/posts/123`]}>
          <Routes>
            <Route path="/posts/:postId" element={<Post />} />
          </Routes>
        </MemoryRouter>
      );
  
      expect(screen.getByRole('status')).toHaveTextContent('Loading...');
  
      const errorMessage = await screen.findByText('Fetch error');
      expect(errorMessage).toBeInTheDocument();
    });
  });