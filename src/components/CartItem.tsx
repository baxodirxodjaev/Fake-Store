import { Link } from "react-router-dom"
import { ProductType } from "../contexts/Types"
// import './style/cartItem.css'
import Plus from "../images/icons/plus-square.svg"
import Minus from "../images/icons/dash-square.svg"
import Trash from "../images/icons/trash3.svg"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

interface cartItemProps  {
  item : ProductType
}

const CartItem = ({item}: cartItemProps) => {

  const {id ,title , price , image , amount, category} = item

  const {removeFromCart, increaseAmount,decreaseAmount } :any = useContext(CartContext)
  
  const total : number = parseFloat((price * amount).toFixed(2))

  return (
  
      <div className="sidebar p-4 w-full ">
          <div className="space-y-4 w-full">
  
            <div className="product-card w-full bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg p-4 flex items-center transition-transform hover:scale-105 hover:shadow-xl">
              <Link to={`/product/${id}`}>
                <img
                  src={image}
                  alt="Product Image"
                  className="w-16 h-16 object-contain rounded-lg border border-gray-300"
                />
              </Link>
              <div className="ml-4 w-full">
                <Link to ={`/product/${id}`}
                   className="text-lg font-semibold text-gray-800 hover:text-amber-600 hover:underline">{title}
                </Link>
                <p className="text-sm text-gray-600">Category: {category}</p>
                <div className="flex items-center justify-between space-x-2 mt-2 mb-2">
                  <p className="text-sm font-medium text-blue-500">${price}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-sm text-gray-600">Amount:</span>
                    <div className="h-8 flex items-center justify-between gap-2 ml-2 border rounded-sm">

                      <button onClick={()=>decreaseAmount(id)} className="h-full"> 
                        <img src={Minus} alt="Minus"  className="h-full"/>  
                       </button>

                      <p className="text-sm text-gray-600"> {amount}</p>

                      <button onClick={()=>increaseAmount(id)} className=" h-full ">  
                        <img src={Plus} alt="Plus"  className=" h-full"/>  
                      </button>

                    </div>

                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <p className="text-sm text-gray-600">Total: ${total}</p>
                  <button 
                    onClick={()=>removeFromCart(id)}  
                    className="border-none rounded-none hover:scale-110 transition-all duration-200">
                    <img src={Trash} alt="trash" className="border-none  size-5  w-full rounded-none"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
  )
}

export default CartItem