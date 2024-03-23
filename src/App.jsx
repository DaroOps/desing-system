import './App.css'
import {Route, Routes, useLocation } from 'react-router-dom'

//COMPONENTS
import NavBar from './components/navBar/NavBar';

//VIEWS
import Home from './views/Home';

function App() {

  const location = useLocation();

  return (
    <div className="App">
        <NavBar className="App__nav"/>
        <Routes>
            <Route path = '/home' Component={Home}/>
        </Routes>
    </div>
  )
}

export default App
