import styles from './Card.module.css'
import React from 'react';
function Card({onFavourite, onPlus, title, imageUrl, price }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price})
    setIsAdded(!isAdded)
  }

  React.useEffect(() =>{

  }, [isAdded])
    return(
        <div className={styles.card}>
            <div className={styles.favourute}>
              <img src="/img/heart.png" alt="Unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>{price} руб.</b>
              </div>
              <img className={styles.plus}
               width={25} height={25}
                onClick={onClickPlus}
                 src={isAdded ? '/img/checked.png' : '/img/plus.png'} alt="Plus" />
            </div>
          </div>
    );
}

export default Card