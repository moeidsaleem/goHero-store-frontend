"use client";

import ProductCard from "../ProductCard/ProductCard";

import { useAppDispatch, useAppSelector } from "@/store/hook";
import { reset, addProduct } from "@/store/cartReducer";

const productsList = {
  "1": {
    id: 1,
    title: "Organic Apples",
    price: 2.99,
    description: "Fresh, locally grown organic apples.",
    category: "Produce",
    imageUrl: "/images/basket.png",
    specifications: {
      weight: "1kg",
      dimensions: "10 x 10 x 10 cm",
      color: "Red",
      material: "Plastic",
    },
  },
  "2": {
    id: 2,
    title: "Free-Range Eggs",
    price: 4.99,
    description: "High-quality free-range eggs from happy chickens.",
    category: "Dairy & Eggs",
    imageUrl: "/images/box.png",
    specifications: {
      weight: "1kg",
      dimensions: "10 x 10 x 10 cm",
      color: "Red",
      material: "Plastic",
    },
  },
  "3": {
    id: 3,
    title: "Whole Grain Bread",
    price: 3.49,
    description: "Nutritious whole grain bread, freshly baked daily.",
    category: "Bakery",
    imageUrl: "/images/basket.png",
    specifications: {
      weight: "1kg",
      dimensions: "10 x 10 x 10 cm",
      color: "Red",
      material: "Plastic",
    },
  },
  // Add more product entries as needed
};

export const ProductGrid = () => {
  const products = useAppSelector((state) => state.counterReducer.products);
  const dispatch = useAppDispatch();

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <a href="/" aria-label="Item" className="mr-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="inline-block mb-2">
              Sustainable, locally grown groceries
            </span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
          We work directly with farmers in our area to provide the freshest,
          most nutritious produce, dairy, and meat. We also offer a wide
          selection of locally made artisanal goods.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        {Object.values(productsList).map((product) => {
          return (
            <ProductCard
              key={product.id}
              {...product}
              btnClick={() => {
                dispatch(addProduct(product));
              }}
            />
          );
        })}
      </div>
      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          See more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};
