import logo from './logo.svg';
import './App.css';
import React,{useState,useRef} from 'react';
import Number from './comp/Number';
import Nav from './comp/Nav';
import Form from './comp/Form';
import Card from './comp/Card';

function App() {

  let btnName = '확인';
  let number =100;
  
  return (
    <div className="App">
      {/* 네비게이션바 컴포넌트 */}
      <Nav />

      <h2>메인 페이지</h2>
      {/* 컴포넌트로 값을 넘기는 방법 : props(변수,함수,객체,useState 등) */}
      {/* 숫자증가 컴포넌트 */}
      <Number btnName={btnName} number={number}/>
      
      {/* 폼 컴포넌트 */}
      <Form />
      
      {/* 카드 컴포넌트 */}
      <Card />
    </div>
  );
}

export default App;
