export interface productType {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: object[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
      createdAt: string;
      updatedAt: string;
      barcode: string;
      qrCode: string;
    };
    images: string[];
    thumbnail: string;
    quantity?: number;
  }
  
  export interface StateType {
    user?: { user: UserType | null };
    cart?: { cart: productType[] | [] };
    favorite: {favorite: productType[] | []}
  }
  
  export interface NavLink {
    title: string,
    link: string
  }
  
  export interface UserType {
    name: string,
    email: string,
    image: string,
    expires?: string,
  }
  