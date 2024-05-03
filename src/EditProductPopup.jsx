import React, { useState } from 'react';
import { StyledEditPopup } from './Style';
import FormWrapper from './Components/FormWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const EditProductPopup = ({ product, onUpdate, onClose }) => {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedProduct);
    onClose();
  };

  return (
    <StyledEditPopup>
      <div className='popup-content'>
        <div className="heading">
          <h2>Edit Product</h2>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={onClose}
            style={{ cursor:'pointer', color: 'rgb(247 243 20)', backgroundColor: '#9da696', borderRadius: '4px', padding: '4px' }}
          />
        </div>
        <FormWrapper
          updatedProduct={updatedProduct}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          onClose={onClose}
        />
      </div>
    </StyledEditPopup>
  );
}

export default EditProductPopup;