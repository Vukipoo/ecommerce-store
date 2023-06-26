import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navigation from './routes/Navigation';
import Authentication from './routes/Authentication';
import Shop from './routes/shop/Shop'
import Checkout from './components/checkout/Checkout';



function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Navigation />} />
      <Route path = 'home' element= {<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path = 'auth' element = {<Authentication />} />
      <Route path = 'checkout' element = {<Checkout />} />


    </Routes>
  );

}

export default App;
