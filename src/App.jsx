import './App.css'
import {Route, Routes, useLocation } from 'react-router-dom'

//COMPONENTS
import { NavBar } from './components';

//VIEWS
import { Home, Catalog } from './views'; 

//ROUTES
const routes = [
  { path: '/home', label: 'Home' },
  { path: '/catalog', label: 'Catalog' },
];

function App() {

  const location = useLocation();

  return (
    <div className="App">
        <NavBar className="App__nav" routes={routes}/>
        <Routes>
            <Route path = '/home' Component={Home}/>
            <Route path = '/catalog' Component={Catalog}/>
        </Routes>
    </div>
  )
}

export default App
