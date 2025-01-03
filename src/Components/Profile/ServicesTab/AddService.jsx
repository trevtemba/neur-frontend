import { div } from "motion/react-client";
import React from "react";

import "./addService.css"

const CreateService = () => {
    return (
        <div className="createServiceModal">
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
                        <span>Don't share private information</span><span>0/500</span>
                    </div>
                    
                </div>
                <div className="actionBtnRow">
                    <button className="actionBtn">
                        Clear
                    </button>
                    <button className="actionBtn">
                        Create
                    </button>
                </div>


            </form>
        </div>
    )
}

export default CreateService;