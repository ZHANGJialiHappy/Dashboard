import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import './index.css'; 

const events = [
    {
    start: moment("2023-04-27T12:00:00").toDate(),
    end: moment("2023-04-27T15:00:00").toDate(),
    title: "Try",
    },
    {
    start: moment("2023-04-28T12:00:00").toDate(),
    end: moment("2023-04-28T13:00:00").toDate(),
    title: "Try2",
    },
    {
    start: moment("2023-04-28T12:00:00").toDate(),
    end: moment("2023-04-28T15:00:00").toDate(),
    title: "Try4",
    },
    {
    start: moment("2023-04-29T12:00:00").toDate(),
    end: moment("2023-04-29T13:00:00").toDate(),
    title: "Try3",
    },
]

function Calendar() {
    const localizer = momentLocalizer(moment)
    
  return (
    <div className="h-screen m-5">
          <BigCalendar
      localizer={localizer}
      events={events}
    //   startAccessor="start"
    //   endAccessor="end"
    // toolbar={false}
    />
    </div>
  )
}

export default Calendar
