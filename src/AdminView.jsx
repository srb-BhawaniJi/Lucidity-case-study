import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditProductPopup from './EditProductPopup';
import { updateProduct, deleteProduct, disableProduct } from './Redux/Action/Inventory.action';
import TableMapper from './Components/TableMapper';
import { StyledAdminView } from './Style';
import WidgetContainer from './Components/WidgetContainer';

const AdminView = (props) => {
  const inventoryData = useSelector(state => state.inventory.inventoryData);
  const dispatch = useDispatch();
  const [editProductData, setEditProductData] = useState(null);

  const handleEditProduct = (index) => {
    const product = inventoryData[index];
    setEditProductData({ ...product, index });
  };

  const handleUpdateProduct = (updatedProduct) => {
    dispatch(updateProduct({ ...updatedProduct, index: updatedProduct.index }));
    setEditProductData(null);
  };

  const handleDeleteProduct = (index) => {
    dispatch(deleteProduct(index));
  };

  const handleDisableProduct = (index) => {
    dispatch(disableProduct(index));
  };

  return (
    <StyledAdminView>
      <WidgetContainer />
      <TableMapper
        adminView={true}
        inventoryData={inventoryData}
        handleEditProduct={handleEditProduct}
        handleDeleteProduct={handleDeleteProduct}
        handleDisableProduct={handleDisableProduct}
      />
      {editProductData && (
        <EditProductPopup
          product={editProductData}
          onUpdate={handleUpdateProduct}
          onClose={() => setEditProductData(null)}
        />
      )}
    </StyledAdminView>
  );
}

export default AdminView;