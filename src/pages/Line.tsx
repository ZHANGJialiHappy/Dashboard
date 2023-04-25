import { Linechart } from "../components";

function Line() {
  return (
    <div className="mt-5">
      <Linechart width={1000} height={500} horizontal={true} vertical={true}/>
    </div>
  )
}

export default Line;
