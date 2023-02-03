
import './App.css';
import View from './Components/View';
import Edit from './Components/Edit';
import Insert from './Components/Insert';
import Register from './Components/Register';
import Login from './Components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route exact path='/' element={<View/>}/>
  <Route exact path='/insert' element={<Insert/>}/>
  <Route exact path='/edit/:id' element={<Edit/>}/>
  <Route exact path='/reg' element={<Register/>}/>
  <Route exact path='/login' element={<Login/>}/>

  </Routes>

  </BrowserRouter>


  </>
  );
}

export default App;
