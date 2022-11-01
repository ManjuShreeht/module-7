
import './App.css';
import Header from './components/Header'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About'
import ProductList from './components/ProductList'

import Footer from './components/Footer'
import Section from './components/Section'

function App() {
  return (
    <BrowserRouter>
    <div >
   <Routes>
<Route path="/" element={[<Header />,<Section/>,<ProductList />,<Footer />]} />
<Route path="/about" element={[<Header />,<About />]} />

   </Routes>

    
    </div>
    </BrowserRouter>
  );
}

export default App;
