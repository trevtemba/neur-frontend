import { div } from "motion/react-client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import React from "react";

import "./deleteService.css"

const DeleteService = ({ deletingServiceId, onClose, btnAnims, deleteService }) => {

    if (deletingServiceId == -1) return null;

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
            y: 50,
        },
        animate: {
            y: 0,
        },
        transition: {
            duration: 0.5,
            ease: [0.25, 1, 0.5, 1],
        },
        exit: {
            y: 50,
        },
    }

    
    return (
        <motion.div
        className="deleteModalContainer"
        key="deleteModalContainer"
        {...backgroundAnimator}
        onClick={onClose}
        >
            <motion.div
            className="deleteServiceModal"
            key="deleteServiceModal"
            {...modalAnimator}>
                <span className="deleteModalLabel">Delete service?</span>
                <div
                className="modalBtnsRow">
                    <motion.button
                    className="modalBtn"
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteService(e, deletingServiceId);
                    }}
                    {...btnAnims}
                    >
                        Yes
                    </motion.button>
                    <motion.button
                    className="modalBtn"
                    onClick={(e) => {
                        onClose
                        e.stopPropagation();
                        ;
                    }}
                    {...btnAnims}
                    >
                        No
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default DeleteService;