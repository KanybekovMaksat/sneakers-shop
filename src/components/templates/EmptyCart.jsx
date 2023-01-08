import React from 'react'


import boxImg from  "../../assets/emptyCart.png";
import Button from '../UI/Button';

const EmptyCart = () => {
  return (
    <div className='EmptyCart'>
        <img src={boxImg} alt="empty cart" />
        <h3 className="EmptyCartTitle">Корзина пустая</h3>
        <p className="EmptyCartSubtitle">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
        <Button >Вернуться назад</Button>
    </div>
  )
}

export default EmptyCart