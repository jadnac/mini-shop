import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Catalogue from './pages/catalogue';
import Checkout from './pages/checkout';
import Product from './pages/product';
import ContactUs from './pages/contactUs';
import AddToCart from './pages/addtocart';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Catalogue />} />
        <Route path='/product/:pid' element={<Product />} />
        <Route path='/product/checkout/:pid' element={<Checkout />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/addtocart' element={<AddToCart />} />
      </Routes>
    </div>
  );
}

export default App;
