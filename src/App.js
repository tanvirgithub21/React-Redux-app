import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './share_component/Navbar/Navbar';
import AddContent from './Pages/AddContent/AddContent';
import Footer from './share_component/Footer/Footer';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add_content' element={<AddContent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
