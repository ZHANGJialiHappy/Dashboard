import { Linechart } from "../components"

function Dashboard() {
  return (
    <div className="mt-5 ml-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="font-bold text-gray-400">Earning</p>
          <p className="text-2xl">DKK 63,448.78</p>
          <div className="card-actions">
            <button className="rounded bg-sky-400 opacity-0.9 text-sky-100 hover:drop-shadow-xl p-2 ">Download</button>
          </div>
        </div>
      </div>
      <div className="md:w-full overflow-auto mt-5">
        <Linechart width="50%" horizontal={false} vertical={false} />
      </div>
    </div>
  )
}

export default Dashboard;
