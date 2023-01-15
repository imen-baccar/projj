import './style/nav.css';
import Nav from './components/Nav'
import Home from './components/Home'
import WishList from './components/WishList';
import'./style/home.css'
import'./style/cards.css'
import CardList from './components/CardList';
import { Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      
        <Nav/>
        <Routes>
          <Route path='/' element={<CardList/>}></Route>
          <Route path='/wishlist' element={<WishList/>}></Route>
        </Routes>
       
        
      
    </div>
  );
}

export default App;
