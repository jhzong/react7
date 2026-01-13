import './App.css';
import './css/Style.css'
import Nav from './comp/Nav';
import { Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BList from './pages/BList';
import BWrite from './pages/BWrite';
import BView from './pages/BView';
import UserList from './pages/UserList';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/BList' element={<BList/>}/>
        <Route path='/BWrite' element={<BWrite/>}/>
        <Route path='/BView' element={<BView/>}/>
        <Route path='/UserList' element={<UserList/>}/>
      </Routes>
    </>
  );
}

export default App;
