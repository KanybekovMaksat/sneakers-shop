import React from 'react'

//link router-dom
import { Link } from 'react-router-dom';


const FavoritePage = () => {
    return (
        <>
            <div className="FavoriteInfo">
                <Link to='/'>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="34" height="34" rx="7.5" fill="white" stroke="#F2F2F2" />
                        <path d="M19 22L14 17L19 12" stroke="#C8C8C8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Link>
                <h1 className="FavoriteTitle">Мои закладки</h1>
            </div>
        </>
    )
}

export default FavoritePage