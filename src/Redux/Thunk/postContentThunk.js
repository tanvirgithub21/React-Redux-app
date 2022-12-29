import { toast } from "react-toastify";
import { add_content } from "../actionCreators/contentActionCreators";
import { handle_loading } from "../actionCreators/handleLoadingActionCreators";

const postContent = (content) => {
    return async (dispatch, getState) => {

        dispatch(handle_loading(true))

        // post image in database
        const image = content.image.imageFile.files[0]
        const formData = new FormData();
        formData.append('image', image);

        const postImageUrl = `https://api.imgbb.com/1/upload?expiration=600&key=dd08001699426cafcb91e3b5edc2a7ff`

        const imgRes = await fetch(postImageUrl, {
            method: 'POST',
            body: formData,
        })
        const imgData = await imgRes.json()


        // added image url and delete url
        if (imgData.success) {


            content.image.imageUrl = imgData.data.display_url
            content.image.imageDeleteUrl = imgData.data.display_url
            delete content.image.imageFile;

            console.log(content);
            // sent data to database
            const res = await fetch("http://localhost:5000/add-content", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(content)
            })
            const data = await res.json()

            if (data.acknowledged) {
                dispatch(add_content({
                    ...content, _id: data.insertedId
                }))
                dispatch(handle_loading(false))
                toast.success("Content Added")
            }
        } else {
            toast.error("Something is wrong")
        }

    }
}

export default postContent;