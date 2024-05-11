
import React from "react";

function Card({ item }) {
  return (
    <div className="p-4">
      <div className="card bg-base-100 shadow-xl hover:scale-105 duration-300 dark:text-black">
        <figure>
          <img className="w-full h-auto" src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            {item.isNew && <div className="badge badge-secondary">NEW</div>}
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline p-2 cursor-pointer">
              $ {item.price}
            </div>
            <div className="badge badge-outline p-2 hover:bg-pink-500 hover:text-white cursor-pointer">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
