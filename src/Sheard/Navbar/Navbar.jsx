/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user);
    const paths = [
        {
            path: "/",
            value: "Home"
        },
        {
            path: "/colleges",
            value: "Colleges"
        },
        {
            path: "/admission",
            value: "Admission"
        },
        {
            path: "/my-college",
            value: "My College"
        },
    ]
    const handleLogout = () => {
        logout()
            .then((res) => { })
            .catch((err) => { });
    };
    return (
        <div className='bg-gray-900 p-4'>
            <nav className='container mx-auto'>
                <div className="navbar">
                    <div className="flex justify-between items-center w-[100%]">
                        <Link>
                            <h2 className='font-bold text-xl text-yellow-300'>Book College</h2>
                        </Link>
                        <div className="dropdown dropdown-end md:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="white">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu  menu-sm dropdown-content bg-gray-900 rounded-box z-[1] mt-3 w-52 p-2 shadow flex justify-between">
                                {
                                    paths?.map((path, i) => {
                                        return <li key={i}>
                                            <NavLink to={`${path?.path}`} className={({ isActive }) => {
                                                return isActive ? "text-yellow-300" : "text-white hover:bg-transparent  hover:text-yellow-300 transition-all"
                                            }}>{path?.value}</NavLink>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>

                        <div className="navbar-center hidden lg:flex items-center">
                            <ul className="menu-horizontal px-1 flex justify-between gap-[30px]">
                                {
                                    paths?.map((path, i) => {
                                        return <li key={i}>
                                            <NavLink to={`${path?.path}`} className={({ isActive }) => {
                                                return isActive ? "text-yellow-300" : "text-white hover:bg-transparent  hover:text-yellow-300 transition-all"
                                            }}>{path?.value}</NavLink>
                                        </li>
                                    })
                                }

                            </ul>
                            {user?.displayName ? <div className="dropdown dropdown-bottom dropdown-end pl-[20px]">
                                <div tabIndex={0} role="button" className="text-[#fff]">{user?.displayName}</div>
                                <ul tabIndex={0} className="dropdown-content menu   z-[99] shadow bg-slate-300 rounded">
                                    <li><Link to={"/update-user"}>Profile Visit</Link></li>
                                    <li><button onClick={handleLogout}>Logout</button></li>
                                </ul>
                            </div> : <NavLink className={({ isActive }) => {
                                return isActive ? "text-yellow-300 pl-[20px]" : "text-white hover:bg-transparent pl-[20px] hover:text-yellow-300 transition-all"
                            }} to={"/login"}>Login</NavLink>}
                        </div>
                    </div>

                </div>
            </nav>
        </div >
    );
};

export default Navbar;