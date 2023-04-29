import Card from './Card'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllProjects } from '../../services/firebase/projectService'

const CardList = ({ getAllProjects, project }: any): JSX.Element => {
  useEffect(() => {
    getAllProjects()
  }, [getAllProjects])

  return (
    <div className='cardList' id="project">
      <div className='cardList__titleBox'>
        <div className='cardList__titleBox--underline'></div>
        <h1 className='cardList__titleBox--title'>PROYECTOS</h1>
      </div>
      <div className='cardList__list'>
        {(project.isLoading === false) ? project.project.map((project: any) => <Card project={project} key={project.name} technologies={project.technologies} />) : <p>Loading...</p>}
      </div>
    </div>
  )
}

const stateToProp = (state: any): any => ({
  project: state.project
});

const dispatchToProp = {
  getAllProjects
};

export default connect(stateToProp, dispatchToProp)(CardList);
