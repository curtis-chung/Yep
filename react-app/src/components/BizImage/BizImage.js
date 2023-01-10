import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import "./BizImage.css"
import ViewImages from '../AWS/ViewImage';

function BizImages({ clickedX, bizImgArr, businessById, bizId }) {

    return (
        <div className='img-modal-container'>
            <div className="container-header">
                <div className="photos-for">Photos for {businessById.business_name}</div>
                <button onClick={clickedX} className='close-button'>Close &nbsp;<i class="fa-solid fa-x"></i></button>
            </div>
            <div className="container-body">
                <div>
                    <ViewImages bizId={bizId} />
                </div>
            </div>
        </div>
    );
}

export default BizImages;
