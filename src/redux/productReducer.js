import { SET_PRODUCT_LIST } from "./constant";
export const productData = (data = [] , action) => {
    
    switch(action.type)
    {
        // case PRODUCT_LIST : 
        // // add to cart logic
        // console.log("PRODUCT LIST condition" ,action);
        // return [action.data];                  // no need because PRODUCT_LIST se direct saga call ho jaayegi or saga getProduct ke threw direct reducer ko call kar diya
        case SET_PRODUCT_LIST :
            console.log("SET_PRODUCT_LIST CONDITION" , action);
            return [...action.data];

            default :
            return data;  
    }

}