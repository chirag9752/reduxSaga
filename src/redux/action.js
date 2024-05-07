import { ADD_TO_CART } from "./constant";
import { REMOVE_TO_CART } from "./constant";
import { EMPTY_CART } from "./constant";

export const addToCart = (data) => {
    console.log("action called" , data);
    return {
        type : ADD_TO_CART,   // action ko is type se pata chalta hai ki kis reduer ko bhejna hai data
        data                    // when key value are same
    }
}

export const RemoveToCart = (data) => {
    console.log("remove action called");
    return {
        type : REMOVE_TO_CART,   // action ko is type se pata chalta hai ki kis reduer ko bhejna hai data
        data
    }
}

export const emptyCart = () => {
    console.log("Empty cart caalled");
    return {
       type : EMPTY_CART
    }
}