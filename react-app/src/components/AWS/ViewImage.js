import React, { useState, useEffect } from "react";

const ViewImages = ({ bizId }) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/biz/${bizId}/images`);
            if (res.ok) {
                const data = await res.json();
                console.log("view img data", data)
                setImages(data.images)
            } else {
                console.log("error", res)
            }

        })();
    }, [])
    return (
        <div className='image-container'>
            {images.map(im => (
                <img className="biz-images" src={im.url} onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "https://www.electricmirror.com/wp-content/uploads/2022/05/image-coming-soon.jpg";
                }} />
            ))}
        </div>
    )
}

export default ViewImages;
