import logo from './logo.svg';
import './App.css';
import './css/Style.css';
import Movies from './comp/Movies';
import { useState, useEffect } from 'react';

function App() {

  const [movies, setMovies]=useState([
    {'no':1, 'title':'아바타', 'year':2022},
    {'no':2, 'title':'타이타닉', 'year':1999},
    {'no':3, 'title':'매트릭스', 'year':2000},
    {'no':4, 'title':'글라디에이터', 'year':2000}
  ]);
  
  //반복문 적용:map()
  //map()함수는 배열의 갯수만큼 1개씩 자동으로 반복처리
  const renderMovies =movies.map((movie)=>{
    return (
      <Movies movie={movie} key={movie.no}/>
    );
  });
  return (
    <div className="root">
      <h2>Welcome to React</h2>
      {/* 영화리스트 */}
      {renderMovies}
     
      
    </div>
  );
}

export default App;
