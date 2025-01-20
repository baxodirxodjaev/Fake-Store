import { useContext } from "react"
import { SidebarContext } from "../contexts/SidebarContext"
import CloseIcon from '../images/icons/x-circle.svg'
import { CartContext } from "../contexts/CartContext"
import CartItem from "./CartItem"
import { ProductType } from "../contexts/Types"


const Sidebar = () => {

    const {isOpen, handleClose, } :any = useContext(SidebarContext)
    const {cart, clearCart , total , itemAmount} :any = useContext(CartContext)

    
    
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'}  w-full sm:w-4/6 md:w-6/12 xl:w-2/5 bg-stone-100 fixed top-0 z-50  h-full
     shadow-xl transition-all duration-300 overflow-auto`}>
        <button onClick={handleClose} className="absolute top-4 right-3 hover:scale-110 transition-all duration-200">
            <img src={CloseIcon} alt="x-circle"  className="size-6"/>
        </button>
        <div className="px-5 py-3 ">
          <hr />
          <h1 className="uppercase text-xl font-semibold text-gray-600 font-mono mb-1">Shopping bag ({itemAmount})</h1>
          <hr />  
        </div>
        <div className=" ">
          {
            cart.map((item : ProductType)=> 
              <CartItem key={item.id} item={item} />
             )
          }
        </div>
        <div className="px-5 py-3">
          <h1 className="font-medium text-lg">Total : <span className="text-orange-400">${parseFloat(total).toFixed(2)}</span> </h1>
          {
            cart.length > 0 ? <button 
            onClick={()=>clearCart()}
             className="uppercase font-semibold w-full py-2 mt-4 hover:bg-red-400 mb-5
             hover:shadow-xl transition duration-200  hover:text-white border-2 border-red-400">
              Delete all
            </button> : ''
          }
          
        </div>
    </div>
  )
}

export default Sidebar