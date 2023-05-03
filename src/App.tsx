import NavBar from './components/nav/NavBar'
import Header from './components/header/Header'
import { SideBar } from './components/sideBar/SideBar'
import CardList from './components/cards/CardList'
import TechnologiesIcons from './components/TechnologiesIcons'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'

const App = (): JSX.Element => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <SideBar />
      <CardList />
      <TechnologiesIcons />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
