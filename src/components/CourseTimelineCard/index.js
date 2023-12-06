// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {eachTimelineCourseDetails} = props
  const {
    courseTitle,
    description,
    duration,
    tagsList,
  } = eachTimelineCourseDetails
  const lastTagsList = () => (
    <ul className="list-tab-container">
      {tagsList.map(eachList => (
        <p className="list-item">{eachList.name}</p>
      ))}
    </ul>
  )

  return (
    <div className="bg-container-project">
      <div className="small-container">
        <h1 className="course-heading">{courseTitle}</h1>
        <div className="icon-container">
          <AiFillClockCircle className="font-icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      {lastTagsList()}
    </div>
  )
}

export default CourseTimelineCard
