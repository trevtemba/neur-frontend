import { AnimatePresence, motion } from "motion/react";
import moreIcon from "../../Assets/profileAssets/more_icon.svg";
import deleteIcon from "../../Assets/profileAssets/delete_icon.svg";
import optionEditIcon from "../../Assets/profileAssets/optionEdit_icon.svg";

import "./vendorService.css";
import { useState } from "react";

const VendorService = (props) => {
    const {id, btnStyling, selectState, setSelect, serviceEdit, optionsActive, setOptionsActive, openModal, ...serviceProps} = props;

    const editBtnStyle = {
        initial: {
            backgroundColor: "hsl(0, 0%, 2.5%)",
        },
        whileHover: {
            backgroundColor: "hsl(0, 0%, 3%)",
        },
        whileTap: {
            backgroundColor: "hsl(0, 0%, 6%)",
        },
        transition: {
            duration: 0,
        }
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
        <div className="serviceDiv">
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
            {serviceEdit == true && (
                <motion.div 
                className="moreIcon"
                {...editBtnStyle}
                onClick={(e) => {
                    e.stopPropagation();
                    setOptionsActive(optionsActive == id ? -1 : id);
                }}
                >
                    <img src={moreIcon}/>
                </motion.div>
            )}
            <AnimatePresence>
                {optionsActive == id && (
                    <motion.div 
                    className="editOptions"
                    key="editOptions"
                    initial={{
                        width: "0px",
                        opacity: 0,
                    }}
                    exit={{
                        width: "0px",
                        opacity: 0,
                    }}
                    animate={{
                        width: "100px",
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: [0.25, 1, 0.5, 1],
                    }}
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
                        >
                            <img src={deleteIcon}/>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

    );
}

export default VendorService