import './index.css'
import Card from './Card'
import Header from './Header'
import Drawer from './Drawer'
function App() {
  return (
    <div className="Wrapper clear">
      <Drawer/>
        <Header />
        <div className="content p-40">
          <div className='d-flex align-center justify-between mb-40'>
            <h1>Все кроссовки</h1>
            <div className='search-block d-flex'>
              <img src="/img/search.png" alt="Search" />
              <input placeholder='Поиск...' />
            </div>
          </div>

          <div className='d-flex '>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            
          </div>
        </div>
    </div>
  );
}

export default App;
