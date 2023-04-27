import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

function Calendar() {
    const localizer = momentLocalizer(moment)
    
  return (
    <div className="h-screen">
          <BigCalendar
      localizer={localizer}
    //   events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
    </div>
  )
}

export default Calendar
