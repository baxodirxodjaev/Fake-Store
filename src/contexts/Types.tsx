

export interface ProductType{
    id: number,
    title: string,
    price: number,
    category :  
        "electronics" |
        "jewelery" |
        "men's clothing" | 
        "women's clothing"
    ,
    description: string,
    image: string,
    amount: number
}