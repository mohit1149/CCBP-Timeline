// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {eachTimelineProjectDetails} = props
  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = eachTimelineProjectDetails

  return (
    <div className="bg-container-project">
      <img className="project-image" src={imageUrl} alt="project" />
      <div className="small-container">
        <h1 className="course-heading">{projectTitle}</h1>
        <div className="icon-container">
          <AiFillCalendar className="font-icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <a href={projectUrl} target="__blank" className="anchor-element">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
