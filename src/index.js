import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FoodBox from './components/FoodBox';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';
import foods from './data';
import "https://unpkg.com/phosphor-icons"
import Entry from './components/Entry';

let tempCal = 0;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Func />
  </React.StrictMode>
);

function Func() {
  const [searchedList, setSearchedList] = useState(Object.keys(foods));
  const [val, setVal] = useState([])
  const [totalCal, setTotalCal] = useState(0);
  return (
    <div className='main-body'>
    <div className="left-body">
      <div className="c">
        <input
          className="search-input"
          placeholder='Search...'
          onKeyUp={(e) => {
            setSearchedList(searchSuggestion(e.target.value));
          }}
        ></input>
        <div id='search-button'>
          <i className="ph-magnifying-glass-bold"></i>
        </div>
      </div>
      <div id='food-box'>
      {
        showFoods(searchedList, setVal)
      }
      </div>
    </div>
    <div className="right-body">
      <div>Today's Food 0 cal</div>
      <div className='entry-body'>
        {
          Object.keys(val).map((key, i) => {
            tempCal += val[key]*foods[key].cal;
            console.log(tempCal);
            return <Entry fName={key} quan={val[key]} baseCal={foods[key].cal}/>
          })
        }
      </div>
    </div>
  </div>
  );
}


function searchSuggestion(query){
  let result = Object.keys(foods);
  if(query != ''){

    result = []
    Object.keys(foods).forEach(key => {
      if(key.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1){
        result.push(key);
      }
    })
  }
  return result;
}

function showFoods(arr, v){
  if(arr.length > 0){
  return (
    <>
      {arr.map((key) => {
        return <FoodBox clickHandler={v} imgSrc={foods[key].imgSrc} foodName={key} cal={foods[key].cal} />;
      })}
    </>
  )
    }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
