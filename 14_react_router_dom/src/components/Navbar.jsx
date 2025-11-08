import {Link} from "react-router"

const Navbar = () => {
  return (
    <div className="text-white flex justify-between px-10 py-3 border-b-2">
        <h2 className="text-3xl tracking-wider text-gray-300 font-bold">ABC</h2>
        <div className="flex gap-20 font-medium ">
            <Link to='/'>Home  </Link>
            <Link to='/about'>About  </Link>
            <Link to='/contact'>Contact  </Link>
        </div>
    </div>
  )
}

export default Navbar