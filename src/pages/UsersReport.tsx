import { UsersLineChart } from "../components";

function UsersReport() {
  return (
    <div className="mt-5 flex justify-center">
      <div>
      <p className=" m-5 text-3xl flex justify-center"> Users' Report</p>
      <UsersLineChart width={1000} height={500} horizontal={true} vertical={true}/>
      </div>
    </div>
  )
}

export default UsersReport;
