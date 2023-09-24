import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addProduct, increment } from './store/counterSlice';

function App() {
  const value = useSelector((state) => state.counter.value);
  const products = useSelector((state) => state.counter.products);
  const dipatch = useDispatch();
  
  console.log(value);

  const onIncrement = () => {
    dipatch(increment())
  }
  const onAddProduct = () => {
    dipatch(addProduct("Iphone"));
  }

  return (
   <div>
     <h1>{value}</h1>
     <button onClick={onIncrement}>increment</button>
     <button onClick={onAddProduct}>add product</button>
    
   </div>
  );
}

export default App;
