
export const NavBar = (): JSX.Element => {
  const handleNavigation = (x: number, y: number): void => {
    window.scroll(x, y)
  }

  return (
    <div className="navbar borderSolid">
      <ul className="navbar__ul">
        <li className="navbar--item" onClick={(): void => { handleNavigation(0, 900); }}>PROYECTOS</li>
        <li className="navbar--item" onClick={(): void => { handleNavigation(0, 1700); }}>EXPERIENCIA</li>
        <li className="navbar--item" onClick={(): void => { handleNavigation(0, 2600); }}>
          <button className="navbar--item__button">CONTACTO</button>
        </li>
        <li className="navbar--item" >
          <div className="navbar--item__stick"></div>
        </li>
        <li className="navbar--item">ENGLISH</li>
      </ul>
    </div>
  )
}
