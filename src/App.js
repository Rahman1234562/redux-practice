
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addProduct, increment } from './store/counterSlice';


function App() {

  const value = useSelector((state) => state.counter.value);
  const products = useSelector((state) => state.counter.products);

  const dispatch = useDispatch();
console.log(value)
// console.log(products)


 const incremenByOne = () => {
    dispatch(increment() );
 };

 const onAddProduct = () => {
  dispatch(addProduct("Iphone") );
 };
  return (
   <div>
    <h1>{value}</h1>
    <h2>{products}</h2>
    <button onClick={incremenByOne}>increment</button>
    <button onClick={onAddProduct}>add products</button>
   </div>
  );
}

export default App;
 