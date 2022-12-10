import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import "./BizImage.css"

function BizImages({ clickedX, bizImgArr, businessById }) {

    return (
        <div className='img-modal-container'>
            <div className="container-header">
                <div className="photos-for">Photos for {businessById.business_name}</div>
                <button onClick={clickedX} className='close-button'>Close &nbsp;<i class="fa-solid fa-x"></i></button>
            </div>
            <div className="container-body">
                <div className='image-container'>
                    {/* {console.log(bizImgArr)} */}
                    {bizImgArr.map(image => {
                        return (
                            <img className="biz-images" src={image} onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = "https://www.electricmirror.com/wp-content/uploads/2022/05/image-coming-soon.jpg";
                            }} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default BizImages;
