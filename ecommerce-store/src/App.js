import Home from './routes/Home';
import Navigation from './routes/Navigation';
import { Routes, Route } from 'react-router-dom';
import SignIn from './routes/SignIn';




const Shop = () => {
  return <h1>I am the shit</h1>
}

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Navigation />} />
      <Route path = 'home' element= {<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path = 'sign-in' element = {<SignIn />} />

    </Routes>
  );

}

export default App;
