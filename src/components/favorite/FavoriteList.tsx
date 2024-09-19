"use client";
import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../../type";
import FavoriteCart from "./FavoriteCart";

const FavoriteList = () => {
  const favoriteItems = useSelector(
    (state: StateType) => state?.favorite?.favorite
  );
  return (
    <>
      {favoriteItems.length > 0 ? (
        <div className="space-y-4">
          {favoriteItems.map((item) => (
            <FavoriteCart key={item?.id} product={item} />
          ))}
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
            <h1 className="text-3xl font-bold text-secondary/90">Empty Favorite List</h1>
        </div>
      )}
    </>
  );
};

export default FavoriteList;
