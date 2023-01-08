import React, { useState } from 'react'

import './card.css';

import checkImg from '../../../assets/check.svg';
import checkedImg from '../../../assets/checked.svg';

import likeImg from '../../../assets/like.svg';
import likedImg from '../../../assets/liked.svg';

const Card = ({ data, onPlus }) => {
    const { image, title, price, id } = data;

    const [added, setAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    
    const onClickPlus = () => {
        onPlus(data)
        setAdded(!added)
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
      };


    return (
        <div className='Card'>
            <div className="CardLike">
                <img onClick={onClickFavorite} src={isFavorite ? likedImg : likeImg} alt="addToFavorite" />
            </div>
            <img className='CardImg' src={image} alt={title} />
            <p className="CardTitle">{title}</p>
            <div className="CardInfo">
                <div className="CardTotal">
                    <p className="CardText">Цена:</p>
                    <p className="CardPrice">{price} руб.</p>
                </div>
                <div className="CardCheck">
                    <img onClick={onClickPlus} src={added ? checkedImg : checkImg} alt="addToCart" />
                </div>
            </div>
        </div>
    )
}

export default Card