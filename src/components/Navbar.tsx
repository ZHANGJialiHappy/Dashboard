import { Link } from "react-router-dom"

function Navbar() {
  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl" to="/">daisyUI</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/linechart">Line Chart</Link></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar
