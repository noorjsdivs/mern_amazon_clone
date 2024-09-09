import React from 'react'

const PriceFormate = ({amount}) => {

    const formatePrice = new Number(amount).toLocaleString("en-US", {
        style:"currency",
        currency:"USD",
        minimumFractionDigits:2
    })




  return <span>{formatePrice}</span>
}

export default PriceFormate