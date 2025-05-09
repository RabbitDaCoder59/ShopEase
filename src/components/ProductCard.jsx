import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import useCartStore from "../store/CartStore";
const ProductCard = ({ data }) => {
  const { addToCart, cart } = useCartStore();

  console.log(cart);

  return (
    <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center  gap-5">
      {data?.products?.map((product) => (
        <div
          key={product.id}
          to={`/product/${product.id}`}
          className="w-full max-w-72 min-h-[20rem] max-h-96 bg-white/20 rounded-md shadow-lg hover:border border-blue-400 relative"
        >
          {/* percentage UI */}
          <div className="absolute w-12 h-14 right-0 rounded-tr-md rounded-bl-3xl bg-blue-700 flex items-center justify-center">
            <span className="text-white text-sm font-medium w-8 text-start uppercase leading-4">
              {Math.floor(product.discountPercentage) || 10}% off{" "}
              {/* fallback in case percent is missing */}
            </span>
          </div>

          {/* image */}
          <Link to={`/product/${product.id}`} className="w-full h-48">
            <div className="bg-black/10 h-[15rem] rounded-t-md">
              <img
                className="cardImage bg-center object-cover w-full h-full"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>
          </Link>

          {/* product contents and cart Icon */}
          <div className="flex justify-between items-center px-1 lg:px-3">
            <div className="py-3 px-2">
              <dl className="text-sm lg:text-base font-semibold text-gray-700">
                <dt>{product.title}</dt>
                <dt>${product.price}</dt>
              </dl>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
              {/* cart icon */}
              <CiShoppingCart
                data-testid="add-to-cart"
                onClick={() => addToCart(product)}
                className="lg:text-4xl text-3xl text-blue-500"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
