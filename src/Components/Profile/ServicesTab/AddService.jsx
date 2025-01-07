import { div } from "motion/react-client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import React from "react";

import "./addService.css"

const CreateService = ({ isOpen, onClose, btnAnims, tempService, setTempService, clearTempService, postServiceInfo }) => {

    const [descCharCount, setDescCharCount] = useState(tempService.description.length)
    if (!isOpen) return null;

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
            setDescCharCount(e.target.value.length)
            setTempService({
                ...tempService, description: e.target.value
            })
        }

    }
    
    return (
            <motion.div 
            className="modalContainer"
            key="modalContainer"
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
                <motion.div className="createServiceModal" 
                onClick={(e) => e.stopPropagation()}
                key="createServiceModal"
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
                                <span>Brief description of service</span><span>{descCharCount}/50</span>
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
                </motion.div>
            </motion.div>
    )
}

export default CreateService;