import React from "react";
import { StyledForm } from "../Style";

const FormWrapper = (props) => {
    const {
        updatedProduct,
        handleSubmit = () => { },
        handleInputChange = () => { },
        onClose,
    } = props;
    console.log(updatedProduct,"sss")
    return (
        <StyledForm onSubmit={handleSubmit}>
            <div className="form-field">
                <label>Category</label>
                <input type="text" name="category" value={updatedProduct.category} onChange={handleInputChange} />
            </div>
            <div className="form-field">
                <label>Price</label>
                <input type="text" name="price" value={updatedProduct.price} onChange={handleInputChange} />
            </div>
            <div className="form-field">
                <label>Quantity</label>
                <input type="number" name="quantity" value={updatedProduct.quantity} onChange={handleInputChange} />
            </div>
            <div className="form-field">
                <label>Value</label>
                <input type="number" name="value" value={updatedProduct.value} onChange={handleInputChange} />
            </div>
            <div className="form-field" />
            <div className="form-btn">
                <button type="submit" className="save-btn">Save</button>
                <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
            </div>
            
        </StyledForm>
    )
}

export default FormWrapper;