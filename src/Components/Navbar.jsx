

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/job">Add Jobs</NavLink></li>
        <li><NavLink to="/addjob">My Posted Job</NavLink></li>
        <li><NavLink to="/mybits">My Bits</NavLink></li>
        {/* <li><NavLink to="/bitrequest">Bits Requests</NavLink></li> */}
        <li><NavLink to="/login">Login</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar rounded-lg mt-5 bg-red-100 h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        <img className="h-32 w-40 rounded-full " src="https://i.ibb.co/vJ5FhQh/mmm-removebg-preview.png" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        {navLinks}
                    </ul>
                </div>


                <div className="w-10 rounded-full">
                    {/* {
                        user &&
                        <img src={user?.photoURL || user_logo} />
                    } */}
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn btn-secondary font-bold text-white ">Sign Out</button>
                            :
                            <Link to="/login">
                                <button className="btn btn-secondary font-bold text-white">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};
export default Navbar;