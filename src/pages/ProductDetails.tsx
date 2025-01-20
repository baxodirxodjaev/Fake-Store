import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ProductContext } from "../contexts/ProductContext"
import { CartContext } from "../contexts/CartContext"
import { ProductType } from "../contexts/Types"
import Star from '../images/icons/star.svg'





const ProductDetails = () => {

  const {id}:any = useParams()
  const {products}: any = useContext(ProductContext)
  const {addToCart}: any = useContext(CartContext)

  const product = products.find((product: ProductType) => product.id === parseInt(id))

  const {title, price, description, image ,category, rating} = product 

  if(!product){
    return <div className="text-3xl font-mono font-bold text-center z-[99]">Product not found</div>
  }  

  return (
    <section className="min-h-screen bg-white py-32 px-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-700 mb-8">
        Explore Our Products
      </h1>
      <div className="w-full flex  gap-7">
         <img src={image} alt={title} className="w-[40%] object-contain  "/>
         <div>
          <h1 className="text-lg font-medium md:text-3xl font-sans md:font-semibold">{title}</h1>
          <p className="mt-5 md:text-lg text-sm">{description}</p>
          <p className="font-light mt-5 mb-3">Category: {category}</p>
          <div className="flex items-center justify-between">
            <p className="text-cyan-600">Sold: {rating.count} times</p>
            <div className="flex items-center">
              <img src={Star} alt="rating" />
              <p className="font-medium ml-3"> {rating.rate}</p>
            </div>
          </div>
          <hr />
          <p className="text-2xl mt-5">Price: <span className="text-teal-600 font-medium">${price}</span></p>
          <hr />
          <button
            onClick={()=>addToCart(product,product.id )}
           className="mt-5 px-5 py-2 bg-lime-500 rounded-sm text-yellow-50 font-medium hover:bg-lime-700">
            Add to Cart
          </button>
         </div>
      </div>
    </section>
  )
}

export default ProductDetails