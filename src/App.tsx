import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
//components 
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (
    <>
     <div>
      <Router>  
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>

        <Sidebar />
        <Footer/>
      </Router>
     </div>
    </>
  )
}

export default App
