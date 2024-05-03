import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faShapes, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';

const WidgetContainer = () => {
  const inventoryData = useSelector(state => state.inventory.inventoryData);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalStoreValue, setTotalStoreValue] = useState(0);
  const [outOfStock, setOutOfStock] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);

  useEffect(() => {
    if (inventoryData && inventoryData.length > 0) {
      const categories = new Set(inventoryData.map(product => product.category));
      setTotalProducts(inventoryData.length);
      setTotalStoreValue(inventoryData.reduce((total, product) => {
        const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));
        const quantity = parseInt(product.quantity);
        if (!isNaN(price) && !isNaN(quantity)) {
          return total + price * quantity;
        }
        return total;
      }, 0));
      setOutOfStock(inventoryData.filter(product => product.quantity === 0).length);
      setTotalCategories(categories.size);
    }
  }, [inventoryData]);

  return (
    <Fragment>
      <h2>Inventory stats</h2>
      <div className='widgets-container'>
        <div className="widget">
          <div className="widget-heading">
            <FontAwesomeIcon icon={faCartShopping} color="#FFF" />
            <h3>Total Products</h3>
          </div>
          <p>{totalProducts}</p>
        </div>
        <div className="widget">
          <div className="widget-heading">
            <FontAwesomeIcon icon={faCircleDollarToSlot} color="#fff" />
            <h3>Total Store Value</h3>
          </div>
          <p>${totalStoreValue.toFixed(2)}</p>
        </div>
        <div className="widget">
          <div className="widget-heading">
            <FontAwesomeIcon icon={faCartShopping} color="#FFF" />
            <h3>Out of Stock</h3>
          </div>
          <p>{outOfStock}</p>
        </div>
        <div className="widget">
          <div className="widget-heading">
            <FontAwesomeIcon icon={faShapes} color="#FFF" />
            <h3>Number of Categories</h3>
          </div>
          <p>{totalCategories}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default WidgetContainer;