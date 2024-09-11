'use client'
import React, { useState } from 'react'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";

const FavoriteButton = () => {
    const [favorite, setFavorite] = useState(false);
  return (
    <button onClick={(e) => setFavorite(prev => !prev)} className='text-2xl'>{favorite? <MdOutlineFavorite/> : <MdOutlineFavoriteBorder/>}</button>
  )
}

export default FavoriteButton