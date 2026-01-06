import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import './css/Style.css';

function App() {

  const[id,setId]=useState("");
  const[name,setName]=useState("");
  
  const [txtId,setTxtId]=useState("");
  const [txtName,setTxtName]=useState("");
  
  const tBtn=()=>{
    alert("아이디와 이름을 출력합니다.");
    setTxtId(id);
    setTxtName(name);
    // 입력창 초기화
    setId("");
    setName("");
  }

  const txtKeyUp=(e)=>{
    if(e.keyCode===13){
      tBtn();
    }
  }
  
  return (
    <div className="root">
      <div className="txtName">{txtId} {txtName}</div>
      <input type="text" placeholder="아이디를 입력하시오." value={id} onKeyUp={txtKeyUp} onChange={(e)=>{setId(e.target.value)}}/>
      <input type="text" placeholder="이름을 입력하시오." value={name} onKeyUp={txtKeyUp} onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={tBtn}>확인</button>
    </div>
  );
}

export default App;
