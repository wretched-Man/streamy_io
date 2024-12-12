import AddEditTemplate from "../components/AddEditTemplate"

const AddVideoPage = ({ submitForm }) => {
    const variableReturnObject = {
        is_edit: false,
        file_label: "Add Video File:",
        thumbnail_label: "Add Video Thumbnail:",
        button_text: "Submit",
        redirect_path: `/videos`
    }

    const initialFormObject = {
        videoTitle: "",
        videoDescription: "",
        videoLength: 0
    }
    
    return (
        <AddEditTemplate
            submitFormMethod={submitForm}
            initialUserForm={initialFormObject}
            variableReturnObject={variableReturnObject}
        />
    )
}

export default AddVideoPage