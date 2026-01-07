import logo from './logo.svg';
import React,{useState,useRef} from 'react';
import './App.css';
import './css/Style.css';

function App() {
  //숫자 증가
  // useState 변수:값 변경시 자동 재렌더링
  const [cnt, setCnt] = useState(0);
  const [inputNum, setInputNum] = useState();
  // useRef 변수-focus():값 변경시 자동 재렌더링 안됨
  const numRef = useRef();
  // 숫자 증가 함수(+1)
  const countBtn = () => {
    setCnt(cnt + 1);
  };
  // 입력한 숫자 확인 함수
  const upBtn = () => {
    if(inputNum.trim() === ""){
      alert("숫자를 입력하시오.");
      numRef.current.focus();//포커스 이동
      return;
    }
    setCnt(parseInt(inputNum));
    setInputNum('');
    // alert("입력한 숫자는 " + inputNum + "입니다.");
  };
  // 엔터키 눌렀을 때 함수 호출
  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      upBtn();
    }
  };

  //useState 변수
  const [userid, setUserid] = useState('');
  const [username, setUsername] = useState('');
  // 로그인 함수
  const loginBtn = () => {
    alert("로그인 되었습니다.");

  };

  return (
    <div className="root">
      <h2>숫자증가</h2>
      <div className="txt">{cnt}</div>
      <input ref={numRef} type="text" placeholder='숫자를 입력하시오.' value={inputNum}
      onChange={ (e) => {setInputNum(e.target.value)} }// 입력상자에 값 변경시 호출(이거 없으면 입력불가)
      onKeyUp={onKeyUp}// 엔터키 누를때 호출
      /><br/>
      <button onClick={countBtn} >숫자증가</button>
      <button onClick={upBtn} >input확인</button>
      <hr/>
      
      <h2>로그인</h2>
      <div className="txt">{userid} {username}</div>
      <input type="text" placeholder="아이디를 입력하시오." value={userid}
      onChange={ (e) => {setUserid(e.target.value)} }/><br/>
      
      <input type="text" placeholder="이름을 입력하시오." value={username}
      onChange={ (e) => {setUsername(e.target.value)} }/><br/>
      
      <button onClick={loginBtn}>로그인</button>
    </div>
  );
}

export default App;
