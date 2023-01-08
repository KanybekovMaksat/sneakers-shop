import React from 'react';

// import button 
import Button from '../UI/Button';


import closeImg from '../../assets/btn-remove.svg';
import EmptyCart from './EmptyCart';


const Aside = ({ onClose, onRemoveCart, items = [] }) => {
  return (
    <div className='AsideVisible'>
      <div className="AsideOverlay"></div>
      <aside className="Aside">
        <div className="AsideInfo">
          <h3 className="AsideTitle">Корзина</h3>
          <img onClick={onClose} src={closeImg} alt="close" />
        </div>
        <div className="AsideBox">
          {items.length > 0 ?
            (
              <div className="">
                {items.map((obj) => (
                  <div className="AsideCard">
                    <img src={obj.image} alt={obj.title} className='AsideCardImg' />
                    <div className="AsideCardInfo">
                      <p className="AsideCardTitle">{obj.title}</p>
                      <p className="AsideCardPrice">{obj.price} руб.</p>
                    </div>
                    <img onClick={() => onRemoveCart(obj.id)} src={closeImg} alt="close" />
                  </div>
                ))}
                <div className="AsideOrder">
                  <div className="AsideSumma">
                    <p className="AsideTotal">Итого:<div className='AsideDot'></div><b>21 498 руб.</b></p>
                    <p className='AsideTax'>Налог 5%:<div className="AsideDot"></div><strong>1074 руб.</strong></p>
                  </div>
                  <Button>
                    Оформить заказ
                    <svg className='AsideBtnImg' width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Button>
                </div>
              </div>)
            :
            (<EmptyCart />)
          }
        </div>
      </aside>
    </div>
  )
}

export default Aside