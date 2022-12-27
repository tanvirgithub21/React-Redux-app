import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './share_component/Navbar/Navbar';
import AddContent from './Pages/AddContent/AddContent';
import Footer from './share_component/Footer/Footer';
import { Provider } from "react-redux"
import store from './Redux/store';
import ReedContent from './share_component/ReedContent/ReedContent';

function App() {
  return (
    <Provider store={store}>
      <div className='container mx-auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='content/:id' element={<ReedContent />} />
          <Route path='add_content' element={<AddContent />} />
        </Routes>
        <Footer />
      </div></Provider>
  );
}

export default App;
