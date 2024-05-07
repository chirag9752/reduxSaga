import { PRODUCT_LIST, SEARCH_PRODUCT} from "./constant";

export const productList =  () => {
    // let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    //  data = await data.json();                                // error action must be plain objects use middleware like saga or thunk
    // console.log("action called" , data);
    return {
        type : PRODUCT_LIST,   // action ko is type se pata chalta hai ki kis reduer ko bhejna hai data
    }
}

export const productSearch = (query) => {
     return {
        type : SEARCH_PRODUCT,
        query
     }
}

// export const setProductList = (data) => {
//     console.log("set action called");
//     return {
//         type : SET_PRODUCT_LIST,
//         data

//     }
// }