import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Catalogue from './pages/catalogue';
import Checkout from './pages/checkout';
import Product from './pages/product';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Catalogue />} />
        <Route path='/product/:pid' element={<Product />} />
        <Route path='/product/checkout/:pid' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
