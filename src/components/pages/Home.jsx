import React, { useState } from 'react'

//import UI Card 
import Card from '../UI/Card';

//import image fot search div
import searchImg from '../../assets/search.svg';
import removeImg from '../../assets/btn-remove.svg';



const Home = ({items, onAddCart}) => {

  //state for search sneakers
  const [searchValue, setSearchValue] = useState('');

  //function for search sneakers
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };



  return (
    <>
      <div className="container">
        <div className="HomeBox">
          <h3 className="HomeTitle">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h3>
          <div className="HomeSearch" >
            <img src={searchImg} alt="" />
            <input id="search" placeholder='Search...' onChange={onChangeSearchInput} value={searchValue} />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear"
                src={removeImg}
                alt="Clear"
              />
            )}
          </div>
        </div>
        <div className="HomeSneakers">
          {items.filter(item => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())).map((data) => {
            return (
              <Card 
               onPlus={(obj) => onAddCart(obj)}
               data={data} 
               key={data.id} />);
          })}
        </div>
      </div>
    </>
  )
}

export default Home