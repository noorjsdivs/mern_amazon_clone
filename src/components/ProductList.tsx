"use client"

import Container from "./Container";
import ProductCart from "./ProductCart";

interface Props {
      products: any
}

const ProductList = ({ products }: Props) => {
      return (
            <div className="py-10">
                  <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {
                              products.map((item) => <ProductCart key={item.id} product={item} />)
                        }
                  </Container>
            </div>
      );
};

export default ProductList;