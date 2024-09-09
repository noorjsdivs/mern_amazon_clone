"use client"
import { Product } from "../../../type";
import Container from "../Container"
import ProductCard from "../ProductCard"

interface ProductsArray {
  products: Product[];
}

const ProductList = ({products}:ProductsArray) => {
  // console.log("products", products)
  return (
    <Container className="">
      <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-4 gap-6">
      {
        products.map((item) =>(
          <ProductCard key={item.id} product={item}/>
        ))
      }
      </div>
    </Container>
  )
}

export default ProductList