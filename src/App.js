import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ListUser from './components/ListUser';
import NewUser from './components/NewUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <Routes>
      <Route path='/newUser' element={<NewUser/>} />
      <Route path='/' element={<ListUser/>} />
      <Route path='/updateUser' element={<UpdateUser/>} />
    </Routes>    
  );
}

export default App;
