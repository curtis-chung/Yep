import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const UploadPicture = ({ bizId }) => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);

        console.log("formData", formData)

        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        const res = await fetch(`/api/biz/${bizId}/images`, {
            method: "POST",
            body: formData,
        });

        console.log(formData, "aaa", res, "bbb", image)
        if (res.ok) {
            await res.json();
            setImageLoading(false);
            history.push("/images");
        }
        else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            console.log("error");
        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <form onSubmit={handleSubmit} className="file-form">
            <input
                type="file"
                accept="image/*"
                onChange={updateImage}
                className="browse-file-button"
            />
            <button type="submit" className="submit-file-button">Submit</button>
            {(imageLoading) && <p>Loading...</p>}
        </form>
    )
}

export default UploadPicture;
