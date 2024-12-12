import Navigation from "./Navigation";
import DropDownNav from "./DropDownNav";

import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";


const Header = ({ headerStyles = "bg-[#0b0b0d] h-20 border-b-2 border-black shadow-gray-600 shadow-xl" }) => {
    const [close, setClose] = useState(false)
    const menuButtonStyles = "fill-white mobile:hidden"
    return (
        <header className={headerStyles}>
            <div className="elements-wrapper flex items-center justify-between h-[100%]">
                <Link to="/">
                    <h1 className=" dark:text-white text-4xl font-extrabold">
                        <span className="text-white">Streamy</span>
                        <span className="text-slate-300">.io</span>
                    </h1>
                </Link>
                <Navigation />
                <GiHamburgerMenu
                    className={close ? "hidden" : `${menuButtonStyles}`}
                    size={30}
                    onClick={() => { setClose(!close) }}
                />
                {
                    close &&
                    <>
                        <MdClose
                            className={`${menuButtonStyles}`}
                            size={30}
                            onClick={() => { setClose(!close) }}
                        />
                        <DropDownNav />
                    </>
                }

            </div>
        </header>
    )
}

export default Header
