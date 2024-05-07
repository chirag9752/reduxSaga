import { RemoveToCart, addToCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart } from '../redux/action';
import { productList } from '../redux/productAction';
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.warn("data in main component from saga", data);
  const product = {
    name: "1 phone",
    type: 'mobile',
    price: 10000,
    color: 'red'
  }

   useEffect( () => {
    dispatch(productList());
   } , []);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(addToCart(product))} >Add to cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(RemoveToCart(product.name))}>remove to cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
        <button>Product list</button>
      </div>
      <div className='product-container'>
        {
          data.map((item) => <div className='product-item' key = {item.id}>
            <img src={item.photo} alt="" />
            <div>Name : {item.name}</div>
            <div>Color : {item.color}</div>
            <div>brand : {item.brand} </div>
            <div>Category : {item.catogory} </div>
            <div>Price : {item.price}</div>
            <div><button onClick={() => dispatch(addToCart(item))}  >ADD to cart</button></div>
            <div><button onClick={() => dispatch(RemoveToCart(item.id))}>Remove to cart</button></div>

          </div>)
        }
      </div>
    </div>
  );
}

export default Main;
