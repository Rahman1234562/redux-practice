import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Cart from './components/cart/Cart'
import Products from './components/cart/Products'
import Header from './components/cart/Header'
function App() {
  return (
    <div className="container py-3">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}
export default App