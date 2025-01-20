import { useContext, useEffect, useState } from "react"
import  { SidebarContext } from "../contexts/SidebarContext"
import Bag  from '../images/icons/bag-fill.svg'
import { CartContext } from "../contexts/CartContext"
import Logo from "../images/icons/Logo.png"
import { Link } from "react-router-dom"
import './style/header.css'
import { ProductContext } from "../contexts/ProductContext"


const Header = () => {

    const {isOpen, setIsOpen} : any = useContext(SidebarContext)
    const {itemAmount} : any = useContext(CartContext)
    const {setSelectedCAtegory} : any = useContext(ProductContext)
    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 64 ? setIsActive(true) : setIsActive(false)
      })
    },[])

  return (
    <header className={`w-full h-20   ${isActive ? 'shadow-lg   transition-all duration-200 ' : ''} fixed z-50 mb-6 py-2`}>
        <div className="container h-full  mx-auto flex items-center justify-between ">
          <Link onClick={()=>setSelectedCAtegory('all products')} className="h-full" to={'/'}>
              <div className="h-full hover:scale-110 transition-all duration-300 shadow-lg mx-3 rounded-sm overflow-hidden flex items-center ">
                <img src={Logo} alt="logo"  className=" size-full  object-contain"/>
              </div>
          </Link>
          {/* <span className="uppercase font-light font-sans  text-lg  italic">
            Minimalistic and Simple E-commerce Website 
            <hr />
          </span> */}
            <div className="title-container">
              <h1 className=" text-[#343a40] text-center font-semibold flex flex-wrap justify-center gap-1
                 leading-5 text-balance text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-4xl">
                <span className="word "> Minimalistic </span>
                <span className="word"> and</span>
                <span className="word"> Simple </span>
                <span className="word"> E-commerce</span>
                <span className="word"> Website</span>
              </h1>
            </div>
            <div onClick={()=>setIsOpen(!isOpen)} className="relative mr-3 hover:scale-110 transition-all duration-150 cursor-pointer">
             <span className="absolute text-white font-medium top-2 left-1/3  ">
              {itemAmount}
            </span> 
                <img className="size-9" src={Bag} alt="" />
            </div>
        </div>
    </header>
  )
}

export default Header