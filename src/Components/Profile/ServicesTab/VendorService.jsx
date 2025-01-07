import { AnimatePresence, motion } from "motion/react";
import moreIcon from "../../Assets/profileAssets/more_icon.svg";
import deleteIcon from "../../Assets/profileAssets/delete_icon.svg";
import optionEditIcon from "../../Assets/profileAssets/optionEdit_icon.svg";

import "./vendorService.css";
import { useState } from "react";
import { animate } from "motion";

const VendorService = (props) => {
    const {id, btnStyling, selectState, setSelect, serviceEdit, optionsActive, setOptionsActive, openModal, openDeleteModal, ...serviceProps} = props;

    const serviceStyling = {
        initial: {
            height: "0px",
            opacity: 0,
        },
        exit: {
            height: "0px",
            opacity: 0,
        },
        animate: {
            height: "100px",
            opacity: 1,
        },
        transition: {
            duration: 0.3,
            ease: [0.25, 1, 0.5, 1],
        },
    }
    const editBtnStyle = {
        initial: {
            width: "0px",
            backgroundColor: "hsl(0, 0%, 2.5%)",
        },
        exit: {
            width: "0px",
        },
        animate: {
            width: "60px",
        },
        whileHover: {
            backgroundColor: "hsl(0, 0%, 3%)",
        },
        whileTap: {
            backgroundColor: "hsl(0, 0%, 6%)",
        },
        transition: {
            duration: 0.2,
            ease: [0.25, 1, 0.5, 1],
        }
    }
    
    const optionBtns = {
        initial: {
            width: "0px",
            opacity: 0,
        },
        exit: {
            width: "0px",
            opacity: 0,
        },
        animate: {
            width: "100px",
            opacity: 1,
        },
        transition: {
            duration: 0.3,
            ease: [0.25, 1, 0.5, 1],
        },
    }

    const optionBtnStyle = {
        initial: {
            backgroundColor: "hsl(0, 0%, 4%)",
        },
        whileHover: {
            backgroundColor: "hsl(0, 0%, 8%)",
        },
        whileTap: {
            backgroundColor: "hsl(0, 0%, 10%)",
        },
        transition: {
            duration: 0.2,
        }
    }

    return (
        <motion.div 
        className="serviceDiv"
        {...serviceStyling}>
            <motion.button
            className="service" onClick={ () => setSelect(id)}
            {...btnStyling}
            animate={{ filter: selectState == id ? "invert(1)" : "invert(0)" }}
            style={{
                borderTopRightRadius: serviceEdit == true ? "0px" : "5px", 
                borderBottomRightRadius: serviceEdit == true ? "0px" : "5px", 
            }}
            >
                <div className="textSect">
                    <span className="name">{serviceProps.name}</span>
                    <span className="duration">{serviceProps.duration}+ hours</span>
                    <span className="desc">{serviceProps.description}</span>
                </div>
                <div className="priceSect">
                    <span className="symbol">$</span><span className="price">{serviceProps.price}</span>
                </div>
            </motion.button>
            <AnimatePresence>
                {serviceEdit == true && (
                    <motion.div 
                    className="moreIcon"
                    key="moreIcon"
                    {...editBtnStyle}
                    onClick={(e) => {
                        e.stopPropagation();
                        setOptionsActive(optionsActive == id ? -1 : id);
                    }}
                    >
                        <img src={moreIcon}/>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {(optionsActive == id && serviceEdit == true) && (
                    <motion.div 
                    className="editOptions"
                    key="editOptions"
                    {...optionBtns}
                    >
                        <motion.button
                        className="editBtn3"
                        {...optionBtnStyle}
                        onClick={(e) => openModal()}
                        >
                            <img src={optionEditIcon}/>
                        </motion.button>
                        <motion.button
                        className="deleteBtn3"
                        {...optionBtnStyle}
                        onClick={(e) => openDeleteModal(id)}
                        >
                            <img src={deleteIcon}/>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>

    );
}

export default VendorService