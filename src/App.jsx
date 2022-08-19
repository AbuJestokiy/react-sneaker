import React from 'react'
import './index.css'
import Card from './components/Card/Index'
import Header from './components/Header'
import Drawer from './components/Drawer'
import { useState } from 'react'

const arr = [
 
]


function App() {
  const [cartOpened,setCartOpened] = React.useState(false)


  return (
    <div className="Wrapper clear">
      
      { cartOpened && <Drawer  onClose={() => setCartOpened(false)}/>}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="content p-40">
          <div className='d-flex align-center justify-between mb-40'>
            <h1>Все кроссовки</h1>
            <div className='search-block'>
              <img src="/img/search.png" alt="Search" />
              <input placeholder='Поиск...' />
            </div>
          </div>

          <div className='d-flex '>
           {arr.map((obj) => (
            <Card
            title={obj.name}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onClick={() => console.log(obj)}
            />
           ))}
          </div>
        </div>
    </div>
  );
}

export default App;
