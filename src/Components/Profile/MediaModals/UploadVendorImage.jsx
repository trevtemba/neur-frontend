import { div } from "motion/react-client";
import ReactCrop, { makeAspectCrop } from 'react-image-crop'
import { motion } from "motion/react";
import { useState } from "react";
import React from "react";

import "./uploadVendorImage.css"
import 'react-image-crop/dist/ReactCrop.css'

const UploadVendorImage = ({ isOpen, onClose, uploadImage, onImageLoad, imgSrc, crop, setCrop, btnAnims }) => {

    if (!isOpen) return null;

    const ASPECT_RATIO = 1;
    const MIN_DIMENSION = 150;

    const backgroundAnimator = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        transition: {
            duration: 0.1,
        },
        exit: {
            opacity: 0,
        },
    }
    
    const modalAnimator = {
        initial: {
            y: 15,
        },
        animate: {
            y: 0,
        },
        transition: {
            duration: 0.1,
        },
        exit: {
            y: 15,
        },
    }
    
    return (
            <motion.div 
            className="modalContainer"
            key="uploadModalContainer1"
            onClick={onClose}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.1,
            }}
            exit={{
                opacity: 0,
            }}
            >
                <motion.div className="uploadServiceModal" 
                onClick={(e) => e.stopPropagation()}
                key="uploadServiceModalK2"
                initial={{
                    y: 50,
                }}
                animate={{
                    y: 0,
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.25, 1, 0.5, 1],
                }}
                exit={{
                    y: 50,
                }}
                >
                    <form className="uploadImageForm" onSubmit={(e) => postServiceInfo(e)}>
                        <div className="imageContainer">
                            <ReactCrop 
                            crop={crop}
                            circularCrop
                            keepSelection
                            aspect={ASPECT_RATIO}
                            minWidth={MIN_DIMENSION}
                            onChange={(crop, percentCrop) => setCrop(percentCrop)}
                            >
                                <img 
                                    className="cropPreview"
                                    src={imgSrc}
                                    style={{ maxHeight: "300px"
                                    }}
                                    onLoad={onImageLoad}
                                />
                            </ReactCrop>
                        </div>
                        <div className="actionBtnRow">
                            <motion.button
                            className="actionBtn"
                            type="button"
                            onClick={onClose}
                            {...btnAnims}>
                                Cancel
                            </motion.button>
                            <motion.button type="submit"
                            className="actionBtn"
                            {...btnAnims}>
                                Create
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </motion.div>
    )
}

export default UploadVendorImage;