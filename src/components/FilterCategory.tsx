import  { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'



const FilterCategory = () => {

    const { setSelectedCAtegory, selectedCategory}: any = useContext(ProductContext)

    const categories =      [
        "all products",
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
        ]

       

  return (

    <div className='flex flex-wrap items-center justify-end mb-4 gap-3'>
        {
            categories.map((item)=>{
                return <div key={item} >
                    <button onClick={()=>setSelectedCAtegory(item)} 
                     className={` ${selectedCategory === item ? 'text-red-400' : ''} hover:text-red-600 uppercase
                      hidden md:block px-3 py-2 font-sans text-lg 
                      font-medium rounded-sm text-neutral-600`}>
                        {item}
                    </button>
                    <hr />
                </div>
            })
        }
        <select
         value={selectedCategory}
         onChange={(e) => setSelectedCAtegory(e.target.value)}
          className=' block md:hidden rounded-sm text-lg text-amber-800 font-medium pl-3 py-1 bg-inherit border-b-2'>
            {
            categories.map((item)=> <option key={item} value={item}>{item}</option> )
            }
        </select>
    </div>
  )
}



export default FilterCategory