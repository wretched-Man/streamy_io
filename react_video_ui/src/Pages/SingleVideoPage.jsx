import { useState } from "react"
import { useParams, Link, useLoaderData, useNavigate } from "react-router-dom";
import VideoList from '../components/VideoList'
import Default from "../components/DefaultTab";
import { MultiLine } from "../components/Formatting";


const SingleVideoPage = ({ deleteVideo, videoLength }) => {
    const { id } = useParams();
    const singleVideo = useLoaderData();
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteVideo(id)
        navigate('/videos')
    }

    return (
        <section className="main-body-element">
            <section className="px-4">
                <video controls poster={`/api/${singleVideo.thumbnail}`} className="w-full aspect-video">
                    <source src={`/api/${singleVideo.video_file}`} />
                    <p>
                        Your browser does not support the video tag.
                    </p>
                </video>
            </section>
            <div className="flex mt-5 flex-col lg:flex-row">
                <section className="m-5 rounded-md bg-white dark:bg-[#272727] p-2 flex-1">
                    <p className="text-black dark:text-white text-3xl font-bold pt-4 pl-4">{singleVideo.title}</p>
                    <p className="text-black dark:text-white text-sm my-4 px-4 leading-6">
                        <MultiLine paragraph={singleVideo.description}/>
                    </p>
                </section>
                <div className="flex-[.5]">
                    <section className="m-5 dark:text-white p-5 min-w-[400px] rounded-md dark:bg-[#272727] text-black bg-white">
                        <p className="dark:text-white text-black text-3xl font-bold pb-4">Manage Video</p>
                        <Link
                            to={`/videos/edit/${id}`}
                            className="bg-indigo-500 hover:bg-indigo-600 font-bold py-2 px-4 rounded-full text-center w-full mt-4 block text-white"
                        >
                            Edit Video
                        </Link>
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 hover:bg-red-600 py-2 px-4 rounded-full w-full mt-5 font-semibold block text-white"
                        >
                            Delete Video
                        </button>
                    </section>
                </div>
            </div>
            <br />
            <section>
                <header>
                    <p className=" my-5 lg:my-10 text-4xl pb-8 font-black lg:pb-12 text-center dark:text-white
                    ">More Videos</p>
                </header>
                {
                    videoLength() > 0 ?
                        <VideoList excludeVideoId={id} videoLayout="grid grid-flow-col auto-cols-[85%] lg:auto-cols-[25%] gap-10 lg:gap-6 overflow-x-auto px-8 lg:px-4 snap-x snap-mandatory" />
                        :
                        <Default />
                }
            </section>
        </section>
    )
}

const singleVideoLoader = async ({ params }) => {
    const res = await fetch(`/api/videos/${params.id}/`)
    const data = await res.json();
    return data
}

export { SingleVideoPage as default, singleVideoLoader }