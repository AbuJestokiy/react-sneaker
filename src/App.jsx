import React from 'react'
import './index.css'
import Card from './components/Card/Index'
import Header from './components/Header'
import Drawer from './components/Drawer'
import { useState } from 'react'


function App() {
  const[items, setItems] = React.useState([])
  const[cartItems, setCartItems] = React.useState([])

  const [cartOpened,setCartOpened] = React.useState(false)

  React.useEffect(() => {
     
    fetch('https://62ff86d034344b6431fb78f6.mockapi.io/items')
    .then(data => data.json())
    .then(result => setItems(result))
  },[])

const onAddToCart = (obj) => {
  setCartItems(prev => [...prev, obj])
}

  return (
    <div className="Wrapper clear">
      
      { cartOpened && <Drawer items={cartItems}  onClose={() => setCartOpened(false)}/>}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="content p-40">
          <div className='d-flex align-center justify-between mb-40'>
            <h1>Все кроссовки</h1>
            <div className='search-block'>
              <img src="/img/search.png" alt="Search" />
              <input placeholder='Поиск...' />
            </div>
          </div>

          <div className='d-flex flex-wrap '>
           {items.map((item) => 
            <Card
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onFavourite={() => console.log('Добавили в закладки')}
            onPlus={(obj) => onAddToCart(item)}

            />
           )}
          </div>
        </div>
    </div>
  );
}

export default App;
