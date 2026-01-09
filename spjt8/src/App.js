import logo from './logo.svg';
import './App.css';
import './css/Style.css';
import Movies from './comp/Movies';
import MovieForm from './comp/MovieForm';
import { useState, useEffect } from 'react';

function App() {

  const [movies, setMovies]=useState([
    {'no':1, 'title':'아바타', 'year':2022},
    {'no':2, 'title':'타이타닉', 'year':1999},
    {'no':3, 'title':'매트릭스', 'year':2000},
    
  ]);
  
  // 2.데이터 삭제 : filter()
  // filter()함수는 특정 조건에 맞는 데이터만 걸러서 새로운 배열로 반환
  // 삭제할 pk키 - no를 받아 전달
  const delMovie=(no)=>{
    // 결과를 충족한 데이터만 return 된다.
    setMovies(movies.filter((movie)=>{return(movie.no !== no);}));
  };
  
  // 1.리스트 출력 : 반복문 map()
  // map()함수는 배열의 갯수만큼 1개씩 자동으로 반복처리
  // 삼항식(조건)=> ? 참 : 거짓
  const renderMovies =
  movies.length?
  movies.map((movie)=>{
    return (
      <Movies movie={movie} delMovie={delMovie} key={movie.no}/>
    )
  })
  :
  <>
  <div className="card">
    <div className="card-header"></div>
    <div className="card-body">
    <h5 className="card-title">데이터가 없습니다.</h5>
    </div>
  </div>
  </>;

  

  // 3.데이터 추가 : [...movies,{'no':5, 'title':'블랙크다운', 'year':2001}], concat()
  
    return (
    <div className="root">
      <h2>영화 등록</h2>
      <MovieForm movies={movies} setMovies={setMovies}/>
      
      <h2>영화 리스트</h2>
      {renderMovies}
     
      
    </div>
  );
}

export default App;
