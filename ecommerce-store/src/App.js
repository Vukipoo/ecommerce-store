import Home from './routes/Home';
import Navigation from './routes/Navigation';
import { Routes, Route } from 'react-router-dom';
import Authentication from './routes/Authentication';
import Shop from './routes/shop/Shop'



function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Navigation />} />
      <Route path = 'home' element= {<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path = 'auth' element = {<Authentication />} />

    </Routes>
  );

}

export default App;
