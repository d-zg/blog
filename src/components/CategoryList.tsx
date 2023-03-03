import React from 'react';
import { CategoryListProps } from './types';

function CategoryList({ categories }: CategoryListProps) {
  return (
    <aside className="category-list">
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <a href={`/category/${category.id}`}>{category.name}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryList;