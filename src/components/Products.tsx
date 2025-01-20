import { Link } from 'react-router-dom';
import AddIcon from '../images/icons/bag-plus.svg'
import EyeIcon from '../images/icons/eye.svg'
import { ProductType } from '../contexts/Types';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';



interface ProductContextType { 
    products: ProductType[] ;
}

const Products = ({product} : ProductContextType | any) => {

   
    
    const {addToCart}:any = useContext(CartContext)

    const {id,  title, image, price, category } = product;

    

  return (
    <div>
      
        <div className="py-3 flex  flex-col justify-center border rounded-sm shadow-md hover:shadow-xl  bg-white h-[450px]
        relative overflow-hidden group transition duration-300">
            <div className="w-full h-[65%]  flex items-start justify-center ">
                <div className="w-[45%] pt-2 h-full mx-auto flex justify-center items-center">
                    <img
                        className=" w-full object-contain group-hover:scale-105 transition duration-300"
                        src={image} alt={category} />
                </div>
            </div>
            <div className=" flex flex-col items-center justify-center opacity-0 group-hover:opacity-100
                transition-all duration-300 gap-1
                absolute top-1 -right-11  group-hover:right-1">
                <button
                  onClick={()=>addToCart(product, id)}  
                 className='bg-emerald-400 hover:bg-emerald-600 px-3 py-2 rounded-sm '>
                    <img className='size-5 ' src={AddIcon} alt="Add" />
                </button>
                <Link to={`/product/${id}`}>
                    <button className='bg-amber-400 hover:bg-amber-600 px-3 py-2 rounded-sm '>
                        <img className='size-5 ' src={EyeIcon} alt="Add" />
                    </button>
                </Link>
            </div>
            <div className='px-5  h-[35%] flex flex-col items-start justify-center'>
                <div className='flex items-center justify-between w-full'>
                    <p className='text-green-600 font-medium'>$ {price}</p>
                    <p className='font-thin'>{category}</p>
                </div>
                <Link to={`/product/${id}`}>
                    <h1 className='font-semibold text-lg hover:text-orange-600'>{title}</h1>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Products