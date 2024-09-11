"use client"
import { getFetchData } from '@/components/helper';
import SinglePage from '@/components/SinglePage'


const ProductPage = async({params}) => {
    const {id} = params;
    const endPoint = `https://dummyjson.com/products/${id}`;
    const product = await getFetchData(endPoint)

    
  return (
    <div><SinglePage product={product}/></div>
  )
}

export default ProductPage