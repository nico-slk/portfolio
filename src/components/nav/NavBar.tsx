
export const NavBar = () => {
  return (
    <div className="navbar borderSolid">
      <ul className="navbar__ul">
        <li className="navbar--item">PROYECTOS</li>
        <li className="navbar--item">EXPERIENCIA</li>
        <li className="navbar--item">
          <button className="navbar--item__button">CONTACTO</button>
        </li>
        <li className="navbar--item">
          <div className="navbar--item__stick"></div>
        </li>
        <li className="navbar--item">ENGLISH</li>
      </ul>
    </div>
  )
}
