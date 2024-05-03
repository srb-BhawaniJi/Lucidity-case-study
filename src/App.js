import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import AdminView from './AdminView';
import UserView from './UserView';
import Navbar from './Navbar';
import { fetchInventoryData } from './Redux/Action/Inventory.action';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
`;

function App() {
  const inventoryApiResponse = useSelector((state) => state.inventory.inventoryData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInventoryData());
  }, [dispatch]);

  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<AdminView inventoryApiResponse={inventoryApiResponse} />} />
          <Route path="/user" element={<UserView inventoryApiResponse={inventoryApiResponse} />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;