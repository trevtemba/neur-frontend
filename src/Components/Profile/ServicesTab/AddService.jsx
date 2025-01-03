import { div } from "motion/react-client";
import { motion } from "motion/react";
import { useState } from "react";
import React from "react";

import "./addService.css"

const CreateService = ({ isOpen, onClose, btnAnims }) => {

    if (!isOpen) return null;

    const [tempService, setTempService] = useState({
        name: "",
        duration: 0,
        price: 0,
        description: "",
    })

    const clearTempService = () => {
        setTempService({
            name: "",
            duration: 0,
            price: 0,
            description: "",
        })
    }

    const modalAnimator = {
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


    return (
        <motion.div 
        className="modalContainer"
        onClick={onClose}
        {...modalAnimator}
        >
            <div className="createServiceModal" onClick={(e) => e.stopPropagation()}>
                <form className="addServiceForm">
                    <div className="inputRow1">
                        <input type="text" 
                            className="serviceNameInput"
                            placeholder="Service name"
                        />
                        <input type="text" 
                            className="serviceFormInput"
                            placeholder="Duration"
                        />
                        <input type="text" 
                            className="serviceFormInput"
                            placeholder="Price"
                        />
                    </div>
                    <div className="inputRow2">
                        <input type="text" 
                            className="serviceDescInput"
                            placeholder="Description"
                        />
                        <div className="descInfo">
                            <span>Brief description of service</span><span>0/500</span>
                        </div>
                        
                    </div>
                    <div className="actionBtnRow">
                        <motion.button
                        className="actionBtn"
                        onClick={() => clearTempService()}
                        {...btnAnims}>
                            Clear
                        </motion.button>
                        <motion.button type="submit"
                        className="actionBtn"
                        {...btnAnims}>
                            Create
                        </motion.button>
                    </div>


                </form>
            </div>
        </motion.div>
    )
}

export default CreateService;