import './App.scss'
import { Header } from './components/header/Header'
import { NavBar } from './components/nav/NavBar'
import { SideBar } from './components/sideBar/SideBar'
import light from './assets/light.svg';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Header />
      <img src={light} alt="light image" className='light_image_background'/>
      <SideBar />
    </div>
  )
}

export default App
