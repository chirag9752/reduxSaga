import { ADD_TO_CART, EMPTY_CART } from "./constant";   // galti na hoi jaaye sopelling me isliye constant file ke andar sab daalte hai
import { REMOVE_TO_CART } from "./constant";

export const cartData = (data = [] , action) => {
     
    // if(action.type === ADD_TO_CART)
    // {
    //     console.log("ADD to cart condition" ,action);
    //     return action.data;
    // }
    // else{
    //     return "no action matched";
    // }
    
    switch(action.type)
    {
        case ADD_TO_CART : 
        // add to cart logic
        console.log("ADD to cart condition" ,action);
        return [action.data , ...data];

        case REMOVE_TO_CART :
            // remove to cart
            console.log("Remove to cart condition" , action);
           
            // data  =  data.length > 0 ? data.length = data.length -1 : [];

            const remainingItem = data.filter((item) => item.id !== action.data);
            console.log("remainingItem" , remainingItem);
            return [...data];
        case EMPTY_CART :
            console.log("empty cart call");
            data = [];
            return [...data];

            default :
            return data;
        
    }

}