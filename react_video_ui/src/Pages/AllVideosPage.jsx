import { useState } from 'react';
import VideoList from '../components/VideoList'
import Default from '../components/DefaultTab';

const AllVideosPage = ({videoLength}) => {
    // Get length of video list from child
    const noOfVideos = videoLength()

    return (
        <section className="main-body-element py-6 lg:py-10">
            <div className="elements-wrapper">
                {
                    noOfVideos > 0 ?
                        <>
                            <h1 className="text-3xl pb-6 lg:text-4xl font-bold lg:pb-12 text-center dark:text-white">{noOfVideos} Videos.</h1>
                            <VideoList />
                        </>
                        :
                        <Default />
                }
            </div>
        </section>
    )
}

export default AllVideosPage