import { TiDeleteOutline } from 'react-icons/ti';
import './index.css';

function CalendarDialog() {
  return (
    <div className="flex flex-wrap justify-center gap-3 items-center">

      <div className="card rounded-s-lg bg-base-100 shadow-xl">
        <div className="h-8 bg-gray-200 rounded-t-lg opacity-75 flex justify-end p-2 text-lg"> 
        <TiDeleteOutline/>
        </div>
        <div className="card-body mt-1">
        <input type="text" placeholder="Add title" className="input input-bordered rounded-none w-full text-lg border-0 border-b-2 h-5" />
        <textarea className="textarea textarea-bordered" placeholder="Add description"></textarea>
        </div>
      </div>
  </div>
  )
}

export default CalendarDialog
