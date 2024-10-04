/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
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
const Footer = () => {
    return (
        <div className='bg-gray-900 pt-[80px] -mt-[70px] '>
            <footer className="footer container mx-auto text-white md:p-10 ps-[10px] py-[30px]">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link className="link link-hover">Book</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    {
                        paths?.map((path, i) => {
                            return <li key={i} className='list-none'>
                                <Link to={`${path?.path}`} className={({ isActive }) => {
                                    return isActive ? "" : "text-white hover:bg-transparent  hover:text-yellow-300 transition-all"
                                }}>{path?.value}</Link>
                            </li>
                        })
                    }
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-yellow-300">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input w-auto input-bordered join-item text-gray-900" />
                            <button className="bg-yellow-300 px-[20px] text-gray-900 join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;