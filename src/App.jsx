import './index.css'

function App() {
  return (
    <div className="Wrapper clear">
      <div style={{display:'none'}} className="overlay">
        <div className="drawer">
          <h2 className='d-flex justify-between mb-30 cu-p'>
            Корзина <img className='removeBtn' src="/img/x.png" alt="Remove" />
            </h2>

          <div className="items">

          <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(/img/1.png)'}} className="cartItemImg"></div>

            <div className='mr-20 flex'>
              <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className='removeBtn' src="/img/x.png" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center">
              <div style={{backgroundImage: 'url(/img/1.png)'}} className="cartItemImg"></div>

            <div className='mr-20 flex'>
              <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className='removeBtn' src="/img/x.png" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center mt-20 mb-20">
              <div style={{backgroundImage: 'url(/img/1.png)'}} className="cartItemImg"></div>

            <div className='mr-20 flex'>
              <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className='removeBtn' src="/img/x.png" alt="Remove" />
          </div>

          
          </div>

          <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 489 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 рубю</b>
            </li>
          </ul>
          <button className='greenButton'>Оформить заказ <img src="/img/strelka.png" alt="" /></button>
          </div>
        </div>
      </div>



        <header className='d-flex justify-between align-center p-40'>
          <div className="d-flex align-center">
            <img width={40} height={40} src='/img/logo.png'/>
              <div>
                <h3 className='text-uppercase'>React Sneakers</h3>
                <p className='opacity-5'>Магазин лучших кроссовок</p>
              </div>
            </div>
          <ul className="d-flex">
            <li className='mr-30'>
              <img width={18} height={18} src='/img/korzina.png'/>
              <span>1205 руб.</span>
                </li>
                  <li>
                    <img width={18} height={18} src="/img/odam.png"/>
              </li>
          </ul>
        </header>
        <div className="content p-40">
          <div className='d-flex align-center justify-between mb-40'>
            <h1>Все кроссовки</h1>
            <div className='search-block d-flex'>
              <img src="/img/search.png" alt="Search" />
              <input placeholder='Поиск...' />
            </div>
          </div>

          <div className='d-flex '>

          <div className="card">
            <div className='favourute'>
              <img src="/img/heart.png" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/img/1.png" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
              </div>
              <button className='button'>
              <img width={11} height={11} src="/img/plus.png" alt="Plus" />
            </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/2.png" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
              </div>
              <button>
              <img width={11} height={11} src="/img/plus.png" alt="Plus" />
            </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/3.png" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
              </div>
              <button>
              <img width={11} height={11} src="/img/plus.png" alt="Plus" />
            </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/4.png" alt="Sneakers" />
            <h5>Кроссовки  Puma X Aka Boku Future Rider</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
              </div>
              <button>
              <img width={11} height={11} src="/img/plus.png" alt="Plus" />
            </button>
            </div>
          </div>

          
          </div>
        </div>
    </div>
  );
}

export default App;
