import './index.css'
import Card from './Card'
import Header from './Header'
import Drawer from './Drawer'

const arr = [
  { name:'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl:'/img/1.png'},
  {name:'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl:'/img/4.png'},
  {name:'Кроссовки Puma X Aka Boku Future Rider', price: 8499, imageUrl:'/img/3.png'},
  {name:'Мужские Кроссовки Nike Blazer Mid Suede', price: 8999, imageUrl:'/img/2.png'}
]

function App() {
  return (
    <div className="Wrapper clear">
      <Drawer/>
        <Header />
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
