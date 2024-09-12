
// type Dimensions = {
//      width: number;
//      height: number;
//      depth: number;
//    };
   
//    type Meta = {
//      createdAt: string;
//      updatedAt: string;
//      barcode: string;
//      qrCode: string;
//    };
   
//    type Review = {
//      reviewerName: string;
//      rating: number;
//      comment: string;
//      reviewerEmail: string;
//    };
   
//    export type Product = {
//      availabilityStatus: string;
//      brand: string;
//      category: string;
//      description: string;
//      dimensions: Dimensions;
//      discountPercentage: number;
//      id: number;
//      images: string[];
//      meta: Meta;
//      minimumOrderQuantity: number;
//      price: number;
//      rating: number;
//      returnPolicy: string;
//      reviews: Review[];
//      shippingInformation: string;
//      sku: string;
//      stock: number;
//      tags: string[];
//      thumbnail: string;
//      title: string;
//      warrantyInformation: string;
//      weight?: number;
//      quantity?: number | undefined;
//    };
   
//    export interface Session {
//      user: {
//        expires: any;
//        user: {
//          email: string;
//          image: string;
//          name: string;
//        };
//      };
//    }
   

export interface ProductType {
  availabilityStatus: string;
  category: string;
  description: string;
  dimensions: {
    depth: number;
    height: number;
    width: number;
  };
  discountPercentage: number;
  id: number;
  images: string[];
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: object[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
}
