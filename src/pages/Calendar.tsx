import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

// type events = {
//     start: Date,
//     end: Date,
//     title: string,
// }

const events = {
    start: moment('2023-04-27T10:00:00').toDate(),
    end: moment('2023-04-27T12:00:00').toDate(),
    title: "Try",
}

function Calendar() {
    const localizer = momentLocalizer(moment)
    
  return (
    <div className="h-screen">
          <BigCalendar
      localizer={localizer}
    //   events={events}
      startAccessor="start"
      endAccessor="end"
    />
    </div>
  )
}

export default Calendar
