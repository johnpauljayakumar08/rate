import logo from './logo.svg';
import './App.css';
import Card from './card'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './home';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCab, faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'
// import {faUser} from '@fortawesome/free-regular-svg-icons'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Menu } from './menu';
import About from './about';
import Details from './details';
import { Table } from './table';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/' element={<Table/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
