import logo from './logo.svg';
import React,{useState,useEffect,useRef} from 'react';// useState, useEffect 훅 임포트
import './App.css';
import './css/Style.css';

function App() {
  
  // useState 변수: 값이 변경되면 화면 갱신(reload)
  const [cnt, setCnt] = useState(0);
  const [id, setId] = useState('aaa');
  // useRef 변수: 값이 변경되어도 화면 갱신 없음. reload되어도 값을 유지.
  // useRef : current키에 값을 저장 => cntRef.current
  const cntRef = useRef(10);
  // 일반 변수: 화면 갱신(reload)되면 값 초기화.
  let count = 0;

  // useEffect: 최초 실행시 구동
  useEffect(
    () => {
    console.log("최초 실행 실행");
    },[cnt]
  );
  // useEffect: 최초 1회 실행
  useEffect(
    () => {
    console.log("최초 실행 실행");
    },[]
  );
  
  // useState 값 출력방식
  const cntBtn = () => {
    setCnt(cnt + 1);
    console.log("cnt:", cnt);
    // 일반변수값 출력
    console.log("count:", count);
    // useRef값 출력
    console.log("refcount:", cntRef.current);
  }
  // 일반변수 값 출력방식
  const countBtn = () => {
    count += 1;
    console.log("count:", count);
    // useState변수 => reload
    setId('bbb'+count)
    console.log("id:", id);
  }
  // useRef 값 출력방식
  const refBtn = () => {
    cntRef.current += 1;
    console.log("refcount:", cntRef.current);
  }

  return (
    <div className="root">
      <div className="txt" id="main">{cnt}</div>
      <button onClick={cntBtn}>useState 확인</button>
      <button onClick={countBtn}>일반변수 확인</button>
      <button onClick={refBtn}>useRef 확인</button>
    </div>
  );
}

export default App;
