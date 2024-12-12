import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-[#191b20] py-10">
            <div className="elements-wrapper flex gap-10 text-white lg:flex-row flex-col lg:justify-between">
                <h1 className=" dark:text-white text-4xl font-extrabold">
                    <Link to="/">
                        <span className="text-white">Streamy</span>
                        <span className="text-slate-300">.io</span>
                    </Link>
                </h1>
                <div className="">
                    <h3 className="font-semibold text-xl mb-3">About us</h3>
                    <p className="lg:w-[60ch] w-full text-sm">
                        At Streamy.io, we believe that video is the most powerful form of expression. Our platform was created to give everyone a voice, whether you're creating, sharing, or simply enjoying what others have crafted. We are more than just a video-sharing site—we're a community where creativity knows no bounds.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-3">Links</h3>
                    <ul className="list-none flex flex-row justify-between lg:px-2 px-4 lg:flex-col h-[80%]">
                        <li className="">
                            <Link className="underline text-blue-500" to="/">HOME</Link>
                        </li>
                        <li className="">
                            <Link className="underline text-blue-500" to="/videos">VIDEOS</Link>
                        </li>
                        <li className="">
                            <Link className="underline text-blue-500" to="/add-video">ADD VIDEO</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer