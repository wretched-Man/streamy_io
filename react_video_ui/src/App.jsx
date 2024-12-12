import { Route, Routes, Router, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { useEffect, useState } from 'react';

import MainLayout from './Layouts/MainLayout';
import HomePage from './Pages/HomePage';
import AllVideosPage from './Pages/AllVideosPage';
import AddVideoPage from './Pages/AddVideoPage';
import SingleVideoPage, { singleVideoLoader } from './Pages/SingleVideoPage';
import NotFoundPage from './Pages/NotFoundPage';
import EditVideoPage, { editVideoLoader } from './Pages/EditVideoPage';

const App = () => {
    // Video Length
    const [videoLength, setVideoListLength] = useState(0);
    useEffect(() => {
        // On load, query video length
        const videoListLength = async () => {
            try {
                const response = await fetch(`/api/videos/?` + new URLSearchParams({
                    length: true,
                }).toString())
                const data = await response.json()
                setVideoListLength(data.length)
            } catch (error) {
                console.error(error)
            }
            return;
        }
        videoListLength();
    }, [])

    const getVideoLength = () => {
        return videoLength
    }

    const addVideoSubmit = async (formInput) => {
        try {
            const response = await fetch("/api/videos/add-video/", {
                method: 'POST',
                body: formInput,
            })
            const data = await response.json()
            // Edit videos length
            setVideoListLength(prev => prev + 1)
        } catch (error) {
            console.error(error)
        }
        return;
    }

    const editVideoSubmit = async (videoId, formInput) => {
        try {
            const response = await fetch(`/api/videos/video-edit/?` + new URLSearchParams({
                id: videoId,
            }).toString(), {
                method: 'PUT',
                body: formInput
            })
            const data = await response.json()
        } catch (error) {
            console.error(error)
        }
        return;
    }

    const deleteVideoSubmit = async (videoId) => {
        try {
            const response = await fetch(`/api/videos/video-edit/?` + new URLSearchParams({
                id: videoId,
            }).toString(), {
                method: 'DELETE',
            })
            const data = await response.json()
            // Edit videos length
            setVideoListLength(prev => prev - 1)
        } catch (error) {
            console.error(error)
        }
        return;
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route index element={<HomePage videoLength={getVideoLength} />} />
                <Route element={<MainLayout />}>
                    <Route path="/videos" element={<AllVideosPage videoLength={getVideoLength} />} />
                    <Route path="/videos/:id" element={<SingleVideoPage deleteVideo={deleteVideoSubmit} videoLength={getVideoLength} />} loader={singleVideoLoader} />
                    <Route path="/add-video" element={<AddVideoPage submitForm={addVideoSubmit} />} />
                    <Route path="/videos/edit/:id" element={<EditVideoPage submitForm={editVideoSubmit} />} loader={editVideoLoader} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </>
        )
    );

    return <RouterProvider router={router} />

    // return (
    //     <Router>
    //         <Routes>
    //             <Route index element={<HomePage videoLength={getVideoLength} />} />
    //             <Route element={<MainLayout />}>
    //                 <Route path="/videos" element={<AllVideosPage videoLength={getVideoLength} />} />
    //                 <Route path="/videos/:id" element={<SingleVideoPage deleteVideo={deleteVideoSubmit} videoLength={getVideoLength} />} loader={singleVideoLoader} />
    //                 <Route path="/add-video" element={<AddVideoPage submitForm={addVideoSubmit} />} />
    //                 <Route path="/videos/edit/:id" element={<EditVideoPage submitForm={editVideoSubmit} />} loader={editVideoLoader} />
    //                 <Route path="*" element={<NotFoundPage />} />
    //             </Route>
    //         </Routes>
    //     </Router>

    // )
}


export default App