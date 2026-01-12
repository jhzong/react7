import logo from './logo.svg';
import './App.css';
import './css/Style.css';
import axios from 'axios'//ajax
import { useState,useEffect } from 'react';

function App() {

  // JS일반변수 - 변수값을 변경할수 있지만, html에 반영이 안되. 화면갱신 시 리셋
  // const uuuser = 'aaa'

  // useState변수 - 데이터가 변경되면 html에 반영되는 변수
  const [users,setUsers] = useState([])
  
  // 화면 갱신될 때 실행되는 함수
  // axios를 사용해 서버에 있는 데이터 호출
  useEffect(()=>{
    axios.get('http://localhost:8000/member/userAll/',{id:'aaa'})
    .then(res => {
      console.log('json데이터 : ',res)
      setUsers(res.data.arrey)
    })
  },[]// [] : 최초 한번만 실행
  )//useEffect약식

  // useEffect(
  //   axios({
  //     method:'get',
  //     url:'https://jsonplaceholder.typicode.com/users',
  //     data:{},
  //   }).then((data)=>{
  //       console.log('성공')
  //     }).catch(error=>{
  //     console.log('실패')
  //   })
  // )//useEffect정석



  const user_list = users.map((user)=>{
    return(
      
      <div className="card" key={user.id}>
        <h5 className="card-header">아이디 : {user.id}</h5>
        <div className="card-body">
          <h5 className="card-title">이름 : {user.name}</h5>
          <p className="card-text">전화 : {user.phone}</p>
          <button className="btn btn-primary">수정</button>
          <button className="btn btn-primary">삭제</button>
        </div>
      </div>
      
    )

  })

  return (
    <div className="root">
      <h2>회원리스트</h2>
      {user_list}
    </div>
  );
}

export default App;
