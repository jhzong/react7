import {useState} from 'react';
import './css/Style.css';

function App() {
  // JS 변수선언
  let id = 'aaa';

  // useState변수선언
  // 변수 2개 지정 : 1개는 변수명, 1개는 변수값 변경 함수
  const [userId, setUserId] = useState('abc');

  // 내부함수선언
  const loginBtn1 = () => {
    alert('변수의 값 변경됨');
    // id = 'bbb';
    // console.log('aaa 변수값 변경:',id);
    setUserId('bbb');
    console.log('abc useState변수:',userId);
    
  }
  const loginBtn2 = function(){
    alert('로그인버튼2가 클릭됨');
  }
  function loginBtn3() {
    alert('로그인버튼3이 클릭됨');
  }

  return (
    <div className="App">
      <h2>메인페이지</h2>
      <div className='txt'>{userId}</div>
      <input type="text" placeholder="아이디를 입력하세요"/>
      <br />
      <button onClick={loginBtn1}>로그인</button>
    </div>
  );
}

export default App;
