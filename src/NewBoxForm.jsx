import { useState } from "react";

function NewBoxForm({handleAddBox}){

    const [formData, setFormData] = useState({color: '', height: '', width: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddBox(formData);
    }

    const handleChange = (e) => {
        const {id, value} = e.target;
        const copy = {...formData};
        copy[id] = value;
        setFormData(copy);
    }
    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Pick Color:</label>
            <input type="color" name="color" id="color" onChange={handleChange} />
            <label htmlFor="height">Height:</label>
            <input type="number" name="height" id="height" onChange={handleChange} />
            <label htmlFor="width">Width:</label>
            <input type="number" name="width" id="width" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default NewBoxForm