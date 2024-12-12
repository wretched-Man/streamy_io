import { Link } from "react-router-dom";

import React from 'react'

const Navigation = () => {
    let headerLinkStyle = "hover:text-slate-300 py-2 text-white dark:text-white rounded-md text-sm font-semibold";
    return (
        <nav className="hidden mobile:block">
            <ul className="list-none flex">
                <li className="mx-4">
                    <Link className={`${headerLinkStyle} px-4`} to="/">HOME</Link>
                </li>
                <li className="mx-4">
                    <Link className={`${headerLinkStyle} px-4`} to="/videos">VIDEOS</Link>
                </li>
                <li className="ml-4">
                    <Link className={`${headerLinkStyle} pl-4`} to="/add-video">ADD VIDEO</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation