import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from './type';
 

interface StoreType{
    cartProduct:Product[];
    addToCart:(product:Product)=>Promise<void>;
    decreaseQuantity:(productId:number)=>void;
    removeFromCart:(prodoctId:number)=>void;
    resetCart:()=>void;

    favoriteProduct:Product[];
    addToFavorite:(product:Product)=>Promise<void>;
    removeFromFavorite:(productId:number)=>void;
    resetFavorite:()=>void;
}

const customStorage ={
    getItem:(name:string)=>{
        const item =localStorage.getItem(name);
        return item? JSON.parse(item): null;
    },
    setItem:(name:string,value:any)=>(
        localStorage.setItem(name,JSON.stringify(value))
    ),
    removeItem:(name:string)=>{
        localStorage.removeItem(name);
    }
}
export const store = create<StoreType>()(
    persist(
      (set) => ({
        cartProduct: [],
        favoriteProduct: [],
  
        addToCart: (product: Product) => {
          return new Promise<void>((resolve) => {
            set((state: StoreType) => {
              const existingProduct = state.cartProduct.find(
                (p) => p.id === product.id
              );
  
              if (existingProduct) {
                return {
                  cartProduct: state.cartProduct.map((p) =>
                    p.id === product.id
                      ? { ...p, quantity: (p.quantity || 0) + 1 }
                      : p
                  ),
                };
              } else {
                return {
                  cartProduct: [
                    ...state.cartProduct,
                    { ...product, quantity: 1 },
                  ],
                };
              }
            });
            resolve();
          });
        },
        decreaseQuantity: (productId: number) => {
          set((state: StoreType) => {
            const existingProduct = state.cartProduct.find(
              (p) => p.id === productId
            );
  
            if (existingProduct) {
              return {
                cartProduct: state.cartProduct.map((p) =>
                  p.id === productId
                    ? { ...p, quantity: Math.max((p?.quantity ?? 1) - 1, 1) }
                    : p
                ),
              };
            } else {
              return state;
            }
          });
        },
        removeFromCart: (productId: number) => {
          set((state: StoreType) => ({
            cartProduct: state.cartProduct.filter(
              (item) => item.id !== productId
            ),
          }));
        },
        resetCart: () => {
          set({ cartProduct: [] });
        },
        addToFavorite: (product: Product) => {
          return new Promise<void>((resolve) => {
            set((state: StoreType) => {
              const isFavorite = state.favoriteProduct.some(
                (item) => item.id === product.id
              );
              return {
                favoriteProduct: isFavorite
                  ? state.favoriteProduct.filter((item) => item.id !== product.id)
                  : [...state.favoriteProduct, { ...product }],
              };
            });
            resolve();
          });
        },
        removeFromFavorite: (productId: number) => {
          set((state: StoreType) => ({
            favoriteProduct: state.favoriteProduct.filter(
              (item) => item.id !== productId
            ),
          }));
        },
        resetFavorite: () => {
          set({ favoriteProduct: [] });
        },
      }),
      {
        name: "store-storage",
        storage: customStorage,
      }
    )
  );