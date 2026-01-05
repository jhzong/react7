import './css/Style.css';
import i500 from './500.jpg';

function App() {

  // css 내부링크 방식(잘안씀) : 기존과 문법구조가 다름, 변수 선언이 필요함
  // css 외부링크 방식(일반적) : css파일을 별도로 만들어서 링크
  // var : 구버전의 변수선언
  // let : 최신버전의 변수선언(재선언 불가, 재할당 가능)
  // const : 최신버전의 상수선언(재선언 불가, 재할당 불가)
  const title1 = {
    // textAlign: 'center',
    // backgroundColor: 'yellow',
    // fontSize: '40px'
  }
  return (
    <> 
      <div className="App">
        <div></div>
        <h2 className='main' style={title1}>메인페이지</h2>
        {/* src폴더에서 import 사용 */}
        <img src={i500}/>
        {/* public폴더에서 절대링크 사용 */}
        <img src="../images/aespa01.webp"/>
      </div>
    </>
  );
}

export default App;
