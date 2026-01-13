import './App.css';
import './css/Style.css'
import Nav from './comp/Nav';
import { BrowserRouter, Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <div className="Root">
        <h2>메인페이지</h2>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
