import React from 'react';
import { render, screen } from '@testing-library/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom";  // optional
import App from '../App';
import Post from '../pages/Post';

describe('App component', () => {
    test('renders Home component when path is /', () => {
      render(
          <App />
      );
      expect(screen.getByRole('main', {name: 'home-page'})).toBeInTheDocument();
    });

    test('renders header when path is /', () => {
      render(
          <App />
      );
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    test('renders footer when path is /', () => {
      render(
          <App />
      );
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
  
    test('renders Post component when path is /post/:id', () => {
      render(
        <MemoryRouter initialEntries={["/post/2"]}>
          <Routes>
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </MemoryRouter>
      );
      expect(screen.getByRole('status', {name: 'post-page'})).toBeInTheDocument();
    });
});