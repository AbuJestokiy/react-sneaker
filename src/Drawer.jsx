function Drawer() {
    return(
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
    );
}

export default Drawer