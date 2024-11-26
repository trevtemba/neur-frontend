import { useState } from "react";
import "./formInput.css"

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, errorMsg, onChange, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true);
    }
    return (
        <div className="formInput">
            <label className="authIcon">{label}</label>
            <input className="authEntry" {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name==="confirmPassword" && setFocused(true)}
                focused={focused.toString()}/>
            <label className="errorMsg">{errorMsg}</label>
        </div>
    );
}

export default FormInput