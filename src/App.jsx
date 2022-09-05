import React from 'react'
import './index.css'
import Card from './components/Card/Index'
import Header from './components/Header'
import Drawer from './components/Drawer'
import { useState } from 'react'
import axios from 'axios'


 function App() {
  const[items, setItems] = React.useState([])
  const[cartItems, setCartItems] = React.useState([])
  const[searchValue, setSearchValue] = React.useState('')
  const [cartOpened,setCartOpened] = React.useState(false)

  React.useEffect(() => {
    axios.get('https://62ff86d034344b6431fb78f6.mockapi.io/items').then((res) => {
      setItems(res.data)
    })
  })

const onAddToCart = (obj) => {
    axios.post('https://62ff86d034344b6431fb78f6.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])

const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value)
}

  return (
    <div className="Wrapper clear">
      
      { cartOpened && <Drawer items={cartItems}  onClose={() => setCartOpened(false)}/>}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="content p-40">
          <div className='d-flex align-center justify-between mb-40'>
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все Кроссовки'}</h1>
            <div className='search-block'>
              <img src="/img/search.png" alt="Search" />
              { searchValue && <img onClick={() => setSearchValue('')} className='clear removeBtn' src="/img/x.png" alt="Close" />}
              <input maxLength={40} value={searchValue} onChange={onChangeSearchInput} placeholder='Поиск...' />
            </div>
          </div>

          <div className='d-flex flex-wrap '>
           {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
           .map((item, index) => 
            <Card
            key={index}
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
}
export default App