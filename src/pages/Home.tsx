import { useContext } from "react"
import Products from "../components/Products"

//import product context
import { ProductContext } from "../contexts/ProductContext"
import Hero from "../components/Hero"
import FilterCategory from "../components/FilterCategory"
import Loader from "../components/Loader"



const Home = () => {

    const productContext = useContext(ProductContext)


    if(!productContext){
        throw new Error('Product Context is not available')
    }

    //get products from context
    const {  filterProducts , isLoading} = productContext

    console.log(filterProducts);
    
    
  return (
    <div>
        <Hero/>
        
        {
            isLoading ? <Loader/> : ''
        }
        <section className="container mx-auto px-3">
            <div>
                <FilterCategory/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
             gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 mb-10">
                {
                    filterProducts.map((product) => {
                        return (
                            <Products product ={product}  key={product.id}/>
                        );
                    })
                }
             </div>
        </section>
    </div>
  )
}

export default Home