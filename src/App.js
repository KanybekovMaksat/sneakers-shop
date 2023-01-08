import React,{useState, useEffect} from 'react'
import axios from "axios";
import  {BrowserRouter as Router,    Routes, Route} from 'react-router-dom'
import './App.css'

// import templates
import Header from './components/templates/Header';
import Aside from './components/templates/Aside';


// import pages
import Home from './components/pages/Home'
import HistoryPage from './components/pages/History';
import FavoritePage from './components/pages/Favorite';


function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://63ba438b56043ab3c7986e49.mockapi.io/items').then((res) => {
    setItems(res.data);
    });
    axios.get('https://63ba438b56043ab3c7986e49.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    })
  }, []);

  const onAddCart = (obj) => {
    axios.post('https://63ba438b56043ab3c7986e49.mockapi.io/cart', obj);
    setCartItems([...cartItems, obj])
  }

  const onAddFavorite = (obj) => {
    axios.post('https://63ba438b56043ab3c7986e49.mockapi.io/favorite', obj);
    setFavorites((prev) => [...prev, obj])
  }

  const onRemoveCart = (id) => {
    axios.delete(`https://63ba438b56043ab3c7986e49.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

console.log(cartItems);
  return (
    <div className='App'>        
      <Router>  
      {cartOpened && <Aside items={cartItems} onClose={() => setCartOpened(false)} onRemoveCart={onRemoveCart}/>}
       <Header onClickCart={() => setCartOpened(true)}/>

        <Routes>
          <Route path='/' element={<Home items={items} onAddCart={onAddCart} onAddFavorite={onAddFavorite}/>}/>
          <Route path='/history' element={<HistoryPage/>}/>
          <Route path='/favorite' element={<FavoritePage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
