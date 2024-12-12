import { useParams, useLoaderData } from "react-router-dom";
import AddEditTemplate from "../components/AddEditTemplate";

const EditVideoPage = ({ submitForm }) => {
    const { id } = useParams()
    const singleVideoEdit = useLoaderData()

    const variableReturnObject = {
        is_edit: true,
        file_label: "New Video File:",
        thumbnail_label: "New Video Thumbnail:",
        button_text: "Save Changes",
        redirect_path: `/videos/${id}`,
        id: `{id}`
    }

    const initialFormObject = {
        videoTitle: singleVideoEdit.title,
        videoDescription: singleVideoEdit.description,
        videoLength: singleVideoEdit.video_length_time
    }

    return (
        <AddEditTemplate
            submitFormMethod={submitForm}
            initialUserForm={initialFormObject}
            variableReturnObject={variableReturnObject}
        />
    )
}

const editVideoLoader = async ({ params }) => {
    const res = await fetch(`/api/videos/video-edit/?` + new URLSearchParams({
        item_id: params.id,
    }).toString())
    const data = await res.json();
    return data
}

export {EditVideoPage as default, editVideoLoader}