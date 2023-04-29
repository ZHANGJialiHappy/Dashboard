import { TiDeleteOutline } from 'react-icons/ti';
import './index.css';

function CalendarDialog() {
  return (
    <div className="flex flex-wrap justify-center gap-3 items-center">

      <div className="card rounded-s-lg bg-base-100 shadow-xl">
        <div className="h-5 bg-gray-100 rounded-t-lg opacity-75 flex justify-end p-1"> 
        <TiDeleteOutline/>
        </div>
        <div className="card-body justify-venter">
        <input type="text" placeholder="Add title and time " className="input input-bordered rounded-none w-full border-0 border-b-2 mx-0.5 p-0" />

        </div>
      </div>
  </div>
  )
}

export default CalendarDialog
