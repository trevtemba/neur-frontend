import { div } from "motion/react-client";
import { motion } from "motion/react";
import { useState } from "react";
import React from "react";

import "./addService.css"

const CreateService = ({ isOpen, onClose, btnAnims, tempService, setTempService, postServiceInfo }) => {

    if (!isOpen) return null;

    const clearTempService = () => {
        setTempService({
            name: "",
            duration: "",
            price: "",
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

    const handleServiceChange = (e, fieldName) => {
        if (fieldName == "name") {
            setTempService({
                ...tempService, name: e.target.value
            })
        }
        else if (fieldName == "duration") {
            setTempService({
                ...tempService, duration: Number(e.target.value)
            })
        }
        else if (fieldName == "price") {
            setTempService({
                ...tempService, price: Number(e.target.value)
            })
        }
        else if (fieldName == "desc") {
            setTempService({
                ...tempService, description: e.target.value
            })
        }

    }
    
    return (
        <motion.div 
        className="modalContainer"
        onClick={onClose}
        // {...modalAnimator}
        >
            <div className="createServiceModal" onClick={(e) => e.stopPropagation()}>
                <form className="addServiceForm" onSubmit={(e) => postServiceInfo(e)}>
                    <div className="inputRow1">
                        <input type="text" 
                            className="serviceNameInput"
                            placeholder="Service name"
                            onChange={(e) => handleServiceChange(e, "name")}
                            value={tempService.name}
                        />
                        <input type="text" 
                            className="serviceFormInput"
                            placeholder="Duration"
                            onChange={(e) => handleServiceChange(e, "duration")}
                            value={tempService.duration}
                        />
                        <input type="text" 
                            className="serviceFormInput"
                            placeholder="Price"
                            onChange={(e) => handleServiceChange(e, "price")}
                            value={tempService.price}
                        />
                    </div>
                    <div className="inputRow2">
                        <input type="text" 
                            className="serviceDescInput"
                            placeholder="Description"
                            onChange={(e) => handleServiceChange(e, "desc")}
                            value={tempService.description}
                        />
                        <div className="descInfo">
                            <span>Brief description of service</span><span>0/500</span>
                        </div>
                        
                    </div>
                    <div className="actionBtnRow">
                        <motion.button
                        className="actionBtn"
                        type="button"
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