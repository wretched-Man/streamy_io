import { Link } from "react-router-dom"

const Default = () => {
    return (
        <div className="text-white w-[100%] flex justify-center items-center flex-col">
            <h1 className="text-4xl font-bold py-3 flex-1">Oops, Nothing Here!</h1>
            <p className="text-sm mt-2">Click the Add Button To Begin Adding Videos!</p>
            <Link className="bg-black border-white border-2 px-4 py-2 text-white rounded-md text-sm inline-block mt-5" to="/add-video">Add Video</Link>
        </div>
    )
}

export default Default
