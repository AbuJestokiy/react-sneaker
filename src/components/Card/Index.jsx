import styles from './Card.module.css'

function Card(props) {

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
              <button className='button' onClick={props.onClick}>
              <img className={styles.plus} width={11} height={11} src="/img/plus.png" alt="Plus" />
            </button>
            </div>
          </div>
    );
}

export default Card