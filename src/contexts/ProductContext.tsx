import  { useState, createContext, useEffect, ReactNode } from "react";  
import { ProductType } from "./Types";





//type of context 
interface ProductContextType { 
    products: ProductType[];
    filterProducts :  ProductType[];
    setSelectedCAtegory: (category: string) => void;
    selectedCategory: string;
    isLoading : boolean
}


//create context
export const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductContextProviderProps {
    children: ReactNode;
}

const ProductProvider = ({children} : ProductContextProviderProps) => {

    const [products, setProducts] = useState<ProductType[]>([]);
    const [selectedCategory, setSelectedCAtegory] = useState<string>('all products')
    const [isLoading , setIsLoading] = useState<boolean>(false)


    //fetch products
    useEffect(() => {
        setIsLoading(true)
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
            setIsLoading(false)
        }
        fetchProducts()
    },[])

    
   
    const filterProducts : ProductType[] = selectedCategory === 'all products' ? products : 
    products.filter(product => product.category === selectedCategory);
    
   
   


    

  return (
    <ProductContext.Provider value={{products , filterProducts, setSelectedCAtegory , selectedCategory , isLoading}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider