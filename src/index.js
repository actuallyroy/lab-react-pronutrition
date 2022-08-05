import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FoodBox from './components/FoodBox';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';
import foods from './data';
import { MagnifyingGlass } from 'phosphor-react';
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
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
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
