import Link from 'next/link';
import React from 'react';

interface CategoryListProps {
    title: string;
    items: {
        id: number;
        name: string;
        url: string;
    }[];
}


const CategoryList = ({ title, items }:CategoryListProps) => (
  <div>
    <p className="font-semibold tracking-wide text-gray-800">{title}</p>
    <ul className="mt-2 space-y-2">
      {items.map((item) => (
        <li key={item.id}>
          <Link href={item.url} className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default CategoryList;