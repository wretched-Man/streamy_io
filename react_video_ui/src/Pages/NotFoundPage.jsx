import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <section className="bg-[#0d1117] min-h-screen py-16">
            <div className="elements-wrapper text-center text-white">
                <span className="text-7xl text-yellow-400">⚠</span>
                <h1 className="text-6xl font-extrabold py-5">404 Page Not Found</h1>
                <p className="text-center pb-3 font-medium text-sm">The page could not be found.</p>
                <Link to="/" className="bg-black border-white border-2 px-4 py-2 rounded-md text-sm inline-block mt-5">Back to Home</Link>
            </div>
        </section>
    )
}

export default NotFoundPage