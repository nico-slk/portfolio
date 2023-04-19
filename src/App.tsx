import { Header } from './components/header/Header'
import { NavBar } from './components/nav/NavBar'
import { SideBar } from './components/sideBar/SideBar'
import { CardList } from './components/cards/CardList'
import { TechnologiesIcons } from './components/TechnologiesIcons'
import { Experience } from './components/experience/Experience'

const App = () => {

  return (
    <div className="app">
      <NavBar />
      <Header />
      <SideBar />
      <CardList />
      <TechnologiesIcons />
      <Experience />
    </div>
  )
}

export default App
