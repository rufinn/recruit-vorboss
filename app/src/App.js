import React from 'react';
import RecentOrders from './views/RecentOrders';
import OrdersByMonth from './views/OrdersByMonth';
import Revenue from './views/Revenue';
import TotalOrders from './views/TotalOrders';
import OrdersByStatus from './views/OrdersByStatus';
import './App.css';

function App() {
  return (
    <div className="App">
      <TotalOrders />
      <OrdersByMonth />
      <OrdersByStatus />
      <Revenue />
      <RecentOrders />
    </div>
  );
}

export default App;
