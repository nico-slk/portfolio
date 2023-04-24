import Card from './Card'

export const CardList = (): JSX.Element => {
  return (
    <div className='cardList'>
      <div className='cardList__titleBox'>
        <div className='cardList__titleBox--underline'></div>
        <h1 className='cardList__titleBox--title'>PROYECTOS</h1>
      </div>
      <div className='cardList__list'>
        <Card />
      </div>
    </div>
  )
}
