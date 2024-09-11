import Container from "../Container"
import ProductCard from "./ProductCard"

interface ProductsArray{
    products:any
}

export default function ProductList({products}:ProductsArray) {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 z-10"> 
      {products?.map((item:any)=>(
        <ProductCard key={item.id}  product={item} />
      ))}
    </Container>
  )
}
