// The AddVideoPage and EditVideoPage Pages have a lot in common
// We store the content here
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const AddEditTemplate = ({
    submitFormMethod,
    initialUserForm,
    variableReturnObject
}) => {
    const [userForm, setUserForm] = useState(initialUserForm)
    const [videoFile, setVideoFile] = useState("")
    const [thumbnailFile, setThumbnail] = useState("")
    const inputStyles = "w-full min-h-[50px] py-2 mt-2 rounded-md"

    const navigate = useNavigate()

    // Changes in form text input
    const handleTextInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUserForm(prev => ({ ...prev, [name]: value }))
    }

    // Get Length Of Uploaded Video
    const getVideoLength = (file) => {
        let video = document.createElement('video');
        video.preload = 'metadata';

        video.onloadedmetadata = function () {
            window.URL.revokeObjectURL(video.src)
            setUserForm(prev => ({ ...prev, "videoLength": video.duration }))
        }

        video.src = URL.createObjectURL(file)
        video.remove()
    }

    // Changes in form file input
    const handleFileChange = (e) => {
        if (e.target.name === 'videoThumbnail') {
            setThumbnail(e.target.files[0])
        }
        else {
            getVideoLength(e.target.files[0])
            setVideoFile(e.target.files[0])
        }
    }

    // Handle File Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        let form_data = new FormData();
        form_data.append("title", userForm.videoTitle);
        form_data.append("description", userForm.videoDescription);
        form_data.append("video_file", videoFile);
        form_data.append("thumbnail", thumbnailFile);
        form_data.append("video_length_time", userForm.videoLength);

        if (variableReturnObject.is_edit) {
            submitFormMethod(variableReturnObject.id, form_data)
        }
        else {
            submitFormMethod(form_data)
        }

        navigate(variableReturnObject.redirect_path)
    }

    return (
        <main className="main-body-element dark:bg-[#262c36]">
            <div className="elements-wrapper">
                <form
                    className="
                flex flex-col items-center justify-center gap-2 *:py-3 *:form-children-style
                dark:bg-slate-300 rounded-xl py-10 min-w-[420px] overflow-x-auto max-w-[800px] mx-auto
                 text-black bg-white
                "
                    onSubmit={handleSubmit}
                >
                    <p>
                        {/* Title Required*/}
                        <label htmlFor="videoTitle">
                            <p>Video Title*:</p>
                            <input className={`${inputStyles} px-2 dark:text-black border-2 border-slate-300 dark:border-gray-500`}
                                type="text"
                                name="videoTitle"
                                id="videoTitle"
                                onChange={handleTextInputChange}
                                value={userForm.videoTitle}
                                required
                            />
                        </label>
                    </p>
                    <p>
                        {/* Description */}
                        <label htmlFor="videoDescription">
                            <p>Video Description*:</p>
                            <textarea className={`${inputStyles} text-black min-h-[50px] px-2 border-2 border-slate-300 dark:border-gray-500`}
                                rows="6"
                                name="videoDescription"
                                id="videoDescription"
                                onChange={handleTextInputChange}
                                value={userForm.videoDescription}
                                required
                            >
                            </textarea>
                        </label>
                    </p>

                    {
                        variableReturnObject.is_edit && (
                            <div>
                                <div>
                                    <p className={`rounded-lg shadow-sm dark:bg-[#182631] dark:text-white px-5 py-4 w-[55ch] bg-slate-300`}>
                                        {/* Note On Changing */}
                                        <span className="font-bold block">Note:</span>
                                        <span className="text-md">
                                            Selecting a video file or a thumbnail image file will replace the current stored file (not shown).
                                            <br />
                                            Leave blank to use the current stored files.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )
                    }

                    <p>
                        {/* Video File */}
                        <label htmlFor="videoFile">
                            <p>{variableReturnObject.file_label}</p>
                            <input className={`${inputStyles}dark:text-white`}
                                type="file"
                                name="videoFile"
                                id="videoFile"
                                onChange={handleFileChange}
                                accept="video/*"
                            />
                        </label>
                    </p>
                    <p>
                        {/* Video Thumbnail Image */}
                        <label htmlFor="videoThumbnail">
                            <p>{variableReturnObject.thumbnail_label}</p>
                            <input className={`${inputStyles}`}
                                type="file"
                                name="videoThumbnail"
                                id="videoThumbnail"
                                onChange={handleFileChange}
                                accept="image/png, image/jpeg, image/jpg"
                            />
                        </label>
                    </p>
                    <p>
                        <div className="">
                            <button type="submit" className="bg-slate-300 border-none dark:bg-white rounded-md py-1 px-3 block mx-auto">
                                {variableReturnObject.button_text}
                            </button>
                        </div>
                    </p>
                </form>
            </div>
        </main>
    )
}

export default AddEditTemplate


