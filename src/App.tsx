import { Header } from './components/header/Header'
import { NavBar } from './components/nav/NavBar'
import { SideBar } from './components/sideBar/SideBar'
import { CardList } from './components/cards/CardList'
import { TechnologiesIcons } from './components/TechnologiesIcons'

const App = () => {

  return (
    <div className="app">
      <NavBar />
      <Header />
      <SideBar />
      <CardList />
      <TechnologiesIcons />
    </div>
  )
}

export default App
