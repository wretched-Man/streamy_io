import { Link } from "react-router-dom";

import React from 'react'

const DropDownNav = () => {
    // let headerLinkStyle = "py-2 text-white dark:text-white rounded-md text-sm font-semibold block";
    let headerLinkStyle = "text-white text-sm font-semibold hover:underline"
    let navListStyle = "w-[80%] mx-auto h-6 text-center my-4 mx-2 border border-white"
    return (
        <nav className="absolute top-20 right-0 bg-black w-[40vw] z-10 min-h-fit pb-5 px-5">
            <ul className="list-none flex flex-col">
                <li className={`${navListStyle}`}>
                    <Link className={`${headerLinkStyle}`} to="/">HOME</Link>
                </li>
                <li className={`${navListStyle}`}>
                    <Link className={`${headerLinkStyle}`} to="/videos">VIDEOS</Link>
                </li>
                <li className={`${navListStyle}`}>
                    <Link className={`${headerLinkStyle}`} to="/add-video">ADD VIDEO</Link>
                </li>
            </ul>
        </nav>
    )
}

export default DropDownNav