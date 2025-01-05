import { motion } from "motion/react";

import "./vendorService.css"

const VendorService = (props) => {
    const {id, btnStyling, selectState, setSelect, ...serviceProps} = props;

    return (
        <motion.button
        className="service" onClick={ () => setSelect(id)}
        {...btnStyling}
        animate={{ filter: selectState == id ? "invert(1)" : "invert(0)" }}
        >
            <div className="textSect">
                <span className="name">{serviceProps.name}</span>
                <span className="duration">{serviceProps.duration}</span>
                <span className="desc">{serviceProps.description}</span>
            </div>
            <div className="priceSect">
                <span className="symbol">$</span><span className="price">{serviceProps.price}</span>
            </div>
        </motion.button>
    );
}

export default VendorService