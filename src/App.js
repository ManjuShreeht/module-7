
import './App.css';
import Header from './components/Header'
import Section1 from './components/Section1';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About'
import ProductList from './components/ProductList'
import Product from './components/Product'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <div >
   <Routes>
<Route path="/" element={[<Header />,<Section1 />,<ProductList />,<Footer />]} />
<Route path="/about" element={[<Header />,<About />]} />

   </Routes>

    
    </div>
    </BrowserRouter>
  );
}

export default App;
