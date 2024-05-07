import { ADD_TO_CART, PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";
import {takeEvery , put} from 'redux-saga/effects'

function* getProducts() {
   let data = yield fetch("http://localhost:3500/product");
     data = yield data.json();                                // error action must be plain objects use middleware like saga or thunk
    // console.log("action called" , data);
    yield put({type : SET_PRODUCT_LIST , data : data})
}  // every generator function must have yield

// REMEMBER FLOW :-> action -> saga -> reducers

function* testCart() {
    // let data
    console.warn("call api");
}

function* searchProducts(data) {
   let result = yield fetch(`http://localhost:3500/product?q=${data.query}`);
   result = yield result.json();
   console.log("action in called" , data);
   yield put({type : SET_PRODUCT_LIST , data:result})
}

function* productSaga()                    // generator function used to handle async operations means async operation complete karne ke baad hi use hota hai 
{
    yield takeEvery(PRODUCT_LIST , getProducts)
    yield takeEvery(ADD_TO_CART , testCart)
    yield takeEvery(SEARCH_PRODUCT , searchProducts)
}

export default productSaga;

