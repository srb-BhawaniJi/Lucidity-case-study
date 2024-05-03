import React from 'react';
import { useSelector } from 'react-redux';
import TableMapper from './Components/TableMapper';
import { StyledUser } from './Style';
import WidgetContainer from './Components/WidgetContainer';


const UserView = () => {
  const inventoryData = useSelector(state => state.inventory.inventoryData);

  return (
    <StyledUser>
      <WidgetContainer />
      <TableMapper  inventoryData={inventoryData} />
    </StyledUser>
  );
}

export default UserView;