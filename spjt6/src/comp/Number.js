import {useState} from "react";

// 컴포넌트 선언 - props값
const Number = (props) => {
    const [num, setNum] = useState(0);
    const cntBtn = () => {
      setNum(num + 1);
    }

  return (
    <>
        <h4>숫자증가 컴퍼넌트 {props.number}</h4>
        <div>{num}</div>
        <button onClick={cntBtn}>{props.btnName}</button>
    </>
  );
};

export default Number;