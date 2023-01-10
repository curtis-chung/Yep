import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BizImages from './BizImage';
import "./BizImage.css"

function BizImageModal({ bizImgArr, businessById, bizId }) {
    const [showModal, setShowModal] = useState(false);

    const clickedX = () => {
        setShowModal(false)
    }

    return (
        <>
            <button onClick={() => setShowModal(true)} className="see-all-button">See all {bizImgArr.length} photos</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <BizImages clickedX={clickedX} bizImgArr={bizImgArr} businessById={businessById} bizId={bizId} />
                </Modal>
            )}
        </>
    );
}

export default BizImageModal;
