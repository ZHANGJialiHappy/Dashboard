import { UsersLineChart } from "../components";

function UsersReport() {
  return (

    <div className="flex justify-center">
      <div>
        <p className="m-5 text-3xl flex justify-center"> Yearly Profit Analysis</p>
        <div className="mt-20 card card-side m-5 items-center w-auto justify-center bg-base-100 shadow-xl">
          <div>
            <UsersLineChart width={600} height={250} horizontal={true} vertical={true} />
          </div>
          <div className="card-body">
            <p>20% year-on-year growth.</p>
            <p>Last year's goal was to grow by 10%</p>
            <p>Exceeded expectations 5000 users.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UsersReport;
