import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import Logo from "../../assets/logo.png";
import { AuthContext } from "../../contexts/AuthProvider";
import { AiFillHeart } from "react-icons/ai";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { user,logout } = useContext(AuthContext) ;


  const handleSignOut = () =>{
      logout()
      .then(() => {})
      .catch( err => console.log(err))
  }

  let activeClassName = " font-bold underline ";
  const menuItems = (
    <>
      <li className="flex items-center">
         <FaHome size={20} className='mr-1' />
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to={"/"}
        >
        Home
        </NavLink>
       
      </li>
      <li>
      
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to={"/everything"}
        >
        Everything
        </NavLink>
       
      </li>
      <li>
        <NavLink><BsFillCartCheckFill size={30} /></NavLink>
      </li>
      <li>
      <NavLink><AiFillHeart className="text-3xl"/></NavLink>
      </li>
     {
      user?.uid?  <li>
      <button onClick={handleSignOut} className="text-white bg-[#040404] text-sm px-5 shadow-sm rounded-md py-2  ">
      Logout
      </button>
     </li> :  <li>
       <Link to={'/login'} className="text-white bg-[#040404] text-sm px-5 shadow-sm rounded-md py-2  ">
        Login
       </Link>
      </li>
     }
      
    </>
  );
  return (
    <nav className=" text-[#000000]  shadow">
      <div className="justify-between px-4 mx-auto  md:items-center lg:flex lg:px-12">
        <div>
          <div className="flex items-center justify-between   lg:block">
            <div className="flex items-center justify-between w-42">
              <img src={Logo} alt="Logo" className="w-16" />
              <Link to="/">
                <h2 className="text-xl font-bold">ShoesShop</h2>
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                className="p-2 text-base-100 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center text-md font-semibold
              justify-between space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
