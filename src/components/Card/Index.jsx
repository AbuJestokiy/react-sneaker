import styles from './Card.module.css'
import React from 'react';
function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded)
  }

  React.useEffect(() =>{

  }, [isAdded])
    return(
        <div className={styles.card}>
            <div className={styles.favourute}>
              <img src="/img/heart.png" alt="Unliked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>{props.price} руб.</b>
              </div>
              <img className={styles.plus} width={25} height={25} onClick={onClickPlus} src={isAdded ? '/img/checked.png' : '/img/plus.png'} alt="Plus" />
            </div>
          </div>
    );
}

export default Card