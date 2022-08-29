function Drawer(props) {
    return(
        <div className="overlay">
        <div className="drawer">
          <h2 className='d-flex justify-between mb-30 cu-p'>
            Корзина <img onClick={props.onClose} className='removeBtn' src="/img/x.png" alt="Close" />
            </h2>

          <div className="items">
          {props.items.map((obj, index) => {
                return (
                  <div key={index} >
                    <div>
                      <img src={obj.imageUrl} alt="" />
                      </div>
                    
                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} руб.</b>
                    </div>
                    <img
                      
                      src="/img/x.png"
                      alt="Remove"
                    />
                  </div>
                );
              })}
          
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