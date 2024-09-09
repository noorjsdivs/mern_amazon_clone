import Image from "next/image";
import { fetchData } from "../hooks/fetchData"


const Categories = async() => {
    const endpoint =  'https://dummyjson.com/products/category/furniture'
    const {products} = await fetchData(endpoint);
    console.log(products)   
  return (
    <div className="flex items-center gap-5">{
        products?.map((list:any, index:number) => (
            <p key={index}><Image src={list?.images[0]} alt="s" width={400} height={400} /></p>
        ))
    }</div>
  )
}

export default Categories