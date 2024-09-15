'use client'
import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../../type";

const FavoriteCart = () => {
    const favorite = useSelector((state : StateType) => state?.favorite?.favorite );
  return (
    <p>
      Marked <span className="text-darkYellow font-semibold">{favorite.length}</span> <br />{" "}
      <span className="font-bold text-nowrap">& Favorite</span>
    </p>
  );
};

export default FavoriteCart;
