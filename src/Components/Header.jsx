import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
export const Header = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex items-center gap-2 md:h-10 md:gap-4 lg:py-8 lg:px-8">
        <img src="./logo.jpg" alt="logo" className="h-10 w-10" />
        <button className="bg-gradient-to-r from-orange-400 to-cyan-500 text-xs text-white md:py-1 px-2 rounded-xl md:w-[160px] text-[1.25rem]  ">
         <Link to='/' ><p className="font-mono text-sm m-2 tracking-wider">Stealth Startup</p></Link>
        </button>
      </div>
      <div className="hidden lg:flex lg:py-5">
        <ul className="lg:flex gap-12 text-white">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
        <div className="hidden lg:flex gap-2 items-center font-serif h-4 w-40 m-3 text-white ">
          <Link to='/login' > SignIn</Link>
          <Link to='/register' className="bg-[#1c407d] h-14 rounded-md px-2 text-white flex items-center">Register</Link>
         
        </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};
