import "./formInput.css"

const FormInput = (props) => {
    const {label, onChange, id, ...inputProps} = props;
    return (
        <div className="formInput">
            <label className="authIcon">{label}</label>
            <input className="authEntry" {...inputProps} onChange={onChange} />
        </div>
    );
}

export default FormInput