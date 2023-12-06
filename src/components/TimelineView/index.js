// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const updatedTitle = timelineItemsList.map(eachList => ({
    title: eachList.title,
  }))

  return (
    <div className="bg-container">
      <h1 className="timeline-heading">
        MY JOURNEY OF <br /> CCBP 4.0
      </h1>

      <Chrono mode="VERTICAL_ALTERNATING" items={updatedTitle}>
        {timelineItemsList.map(eachTimeline =>
          eachTimeline.categoryId === 'PROJECT' ? (
            <ProjectTimelineCard
              key={eachTimeline.id}
              eachTimelineProjectDetails={eachTimeline}
            />
          ) : (
            <CourseTimelineCard
              key={eachTimeline.id}
              eachTimelineCourseDetails={eachTimeline}
            />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
