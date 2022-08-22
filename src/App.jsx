import React from 'react'
import './index.css'
import Card from './components/Card/Index'
import Header from './components/Header'
import Drawer from './components/Drawer'
import { useState } from 'react'

const arr = [
  { 
    "title":"Мужские Кроссовки Nike Blazer Mid Suede",
    "price": "12999",
    "imageUrl":"/img/1.png"
    },
    {
      "title":"Мужские Кроссовки Nike Air Max 270",
      "price": "15600", 
      "imageUrl":"/img/4.png"
      },
      {
        "title":"Кроссовки Puma X Aka Boku Future Rider", 
        "price": "8499", 
        "imageUrl":"/img/3.png",
    },
        {
        "title":"Мужские Кроссовки Nike Blazer Mid Suede", 
        "price": "8999", 
        "imageUrl":"/img/2.png"
    },
        {
        "title":"Мужские Кроссовки Nike Blazer Mid Suede", 
        "price": "13699", 
        "imageUrl":"/img/5.png"
    },
    {
        "title":"Мужские Кроссовки Nike Blazer Mid Suede", 
        "price": "7599", 
        "imageUrl":"/img/6.png"
    },
    { 
      "title":"Мужские Кроссовки Nike Blazer Mid Suede",
      "price": "12999",
      "imageUrl":"/img/7.png"
      },
      {
        "title":"Мужские Кроссовки Nike Air Max 270",
        "price": "15600", 
        "imageUrl":"/img/8.png"
        },
        {
          "title":"Кроссовки Puma X Aka Boku Future Rider", 
          "price": "8499", 
          "imageUrl":"/img/9.png",
      },
          {
          "title":"Мужские Кроссовки Nike Blazer Mid Suede", 
          "price": "8999", 
          "imageUrl":"/img/10.png"
      },
]


function App() {
  const[items, setItems] = React.useState([
    { 
    "title":"Мужские Кроссовки Nike Blazer Mid Suede",
    "price": "12999",
    "imageUrl":"/img/1.png"
    },
    {
      "title":"Мужские Кроссовки Nike Air Max 270",
      "price": "15600", 
      "imageUrl":"/img/4.png"
      },
      {
        "title":"Кроссовки Puma X Aka Boku Future Rider", 
        "price": "8499", 
        "imageUrl":"/img/3.png",
    },
        {
        "title":"Мужские Кроссовки Nike Blazer Mid Suede", 
        "price": "8999", 
        "imageUrl":"/img/2.png"
    },
        {
        "title":"Мужские Кроссовки Nike Blazer Mid Suede", 
        "price": "13699", 
        "imageUrl":"/img/5.png"
    },
    {
        "title":"Мужские Кроссовки Nike Blazer Mid Suede", 
        "price": "7599", 
        "imageUrl":"/img/6.png"
    },
    { 
      "title":"Мужские Кроссовки Nike Blazer Mid Suede",
      "price": "12999",
      "imageUrl":"/img/7.png"
      },
      {
        "title":"Мужские Кроссовки Nike Air Max 270",
        "price": "15600", 
        "imageUrl":"/img/8.png"
        },
        {
          "title":"Кроссовки Puma X Aka Boku Future Rider", 
          "price": "8499", 
          "imageUrl":"/img/9.png",
      },
          {
          "title":"Мужские Кроссовки Nike Blazer Mid Suede", 
          "price": "8999", 
          "imageUrl":"/img/10.png"
      },{ 
        "title":"Мужские Кроссовки Nike Blazer Mid Suede",
        "price": "12999",
        "imageUrl":"/img/1.png"
        },
        {
          "title":"Мужские Кроссовки Nike Air Max 270",
          "price": "15600", 
          "imageUrl":"/img/4.png"
          }])
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

          <div className='d-flex flex-wrap '>
           {items.map((obj) => (
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
