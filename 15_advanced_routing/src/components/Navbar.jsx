import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className="flex justify-between bg-cyan-700 px-10 py-3 ">
      <h2 className="text-4xl tracking-widest font-bold text-gray-800">XYZ</h2>
      <div className="flex gap-10 font-semibold items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
