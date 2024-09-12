"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { productType, StateType } from "../../type";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  clearFavorite,
  removeToFavorite,
} from "@/Redux/favorite/favoriteSlice";
import toast from "react-hot-toast";

interface Props {
  product: productType;
}

const FavoriteButton = ({ product }: Props) => {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();
  const favoriteArr = useSelector(
    (state: StateType) => state.favorite.favorite
  );

  const taggleFavoriteProductAddOrRemove = () => {
    if (favorite) {
      dispatch(removeToFavorite(product?.id));
      setFavorite(false);
      toast.success("Remove from favorite!");
    } else {
      dispatch(addToFavorite(product));
      setFavorite(true);
      toast.success("Add to  favorite!");
    }
  };

  useEffect(() => {
    const exitsFavorite = favoriteArr.find(
      (item: productType) => product?.id === item?.id
    );
    if(exitsFavorite){
      setFavorite(true);
    }
  }, []);

  return (
    <button onClick={taggleFavoriteProductAddOrRemove} className="text-2xl">
      {favorite ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
    </button>
  );
};

export default FavoriteButton;
