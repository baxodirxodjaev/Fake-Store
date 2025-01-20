import { createContext, ReactNode, useEffect, useState } from "react"
import { ProductType } from "./Types"



export const CartContext = createContext ({})

interface cartContextProviderProps{
  children: ReactNode
}

const CartProvider = ({children} : cartContextProviderProps) => {

  const [cart, setCart] = useState<ProductType[]>([]) 
  const [itemAmount , setItemAmount] = useState(0)
  const [total, setTotal] = useState(0)


//Load carts from Local Storage in intial render
useEffect(() => {
  const SavedCart = localStorage.getItem("cart");
  if (SavedCart) {
    setCart(JSON.parse(SavedCart));
  }
},[])


//Save cart to Local Storage on state change
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
},[cart])


//update total price of products
  useEffect(()=>{
    const totalPrice = cart.reduce((accumulator, current)=>{
      return accumulator + current.price * current.amount
    }, 0);
    setTotal(totalPrice)
  },[cart])


//update total amounts of products in the cart
  useEffect(()=>{
    if(cart){
      const totalAmount = cart.reduce((accumulator, current)=>{
        return accumulator + current.amount
      },0)
      setItemAmount(totalAmount)
    }
  },[cart])


//add to cart products
  const addToCart =(product : ProductType , id : number)=>{
    const newItem = {...product , amount : 1  }
    
  
//check if tje item is already in the cart
    const cartItem = cart.find((item)=>{
      return item.id === id
    });


// if item is already in the cart, update the amount of the item
    if(cartItem){
      const newCart = [...cart].map(item=>{
        if(item.id === id) {
          return {...item, amount : cartItem.amount + 1 }
        } else {
          return item
        }
      });
      setCart(newCart)
    }else{
      setCart([...cart, newItem])
    };
};


// remove item from cart
  const removeFromCart = (id : number) => {
    const newCart = [...cart].filter(item => item.id !== id);
    setCart(newCart)
  }


// delete all products from cart and from Local Storage
  const clearCart = () => {
    setCart([])
    localStorage.removeItem("item")
  }

  
// update amount of product in cart
  const increaseAmount =(id : number)=>{
    const newCart : any = cart.find((item)=>item.id === id);
    addToCart(newCart, id)
  }

// update amount of product in cart
  const decreaseAmount =(id : number)=>{
    const cartItem = cart.find((item)=>{
      return item.id === id
    });
   
    if(cartItem){
      const newCart = cart.map((item)=>{
        if(item.id === id){
          return { ...item, amount : cartItem.amount - 1 }
        }else{
          return item
        }
      });
      setCart(newCart)
    }
    if(cartItem && cartItem?.amount<2){
      removeFromCart(id)
    }
  }


  return (
    <CartContext.Provider 
                    value={ {
                      cart,
                      addToCart,
                      removeFromCart ,
                      clearCart ,
                      increaseAmount,
                      decreaseAmount ,
                      itemAmount,
                      total} }>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider