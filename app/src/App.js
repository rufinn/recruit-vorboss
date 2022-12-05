import { useQuery } from '@apollo/client';
import {
  QUERY_GET_ALL_ORDERS,
  QUERY_GET_ALL_REVENUE,
  QUERY_GET_ORDERS_BY_MONTH,
  QUERY_GET_ORDERS_BY_STATUS,
  QUERY_GET_RECENT_ORDERS,
} from './utils/requests';
import BoardItem from './components/BoardItem';
import OrderHeader from './components/Order/OrderHeader';
import OrderItem from './components/Order/OrderItem';
import Input from './components/Input/Input';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [recentOrdersCount, setRecentOrdersCount] = useState(5);

  const { loading: revenueLoading, data: { getAllRevenue: revenueData } = {} } = useQuery(QUERY_GET_ALL_REVENUE);
  const { loading: ordersByMonthLoading, data: { getOrdersByMonth: ordersByMonthData } = {}} = useQuery(QUERY_GET_ORDERS_BY_MONTH, {
    variables: {
      month: (new Date()).getMonth() + 1
    }
  });
  const { loading: allOrdersLoading, data: { getAllOrders: allOrdersData } = {}} = useQuery(QUERY_GET_ALL_ORDERS); 
  const { loading: ordersByStatusLoading, data: { getOrdersByStatus: ordersByStatusData } = {}} = useQuery(QUERY_GET_ORDERS_BY_STATUS, {
    variables: {
      status: 'in_progress'
    }
  });

  const { loading: recentOrdersLoading, data: { getRecentOrders: recentOrdersData } = {}} = useQuery(QUERY_GET_RECENT_ORDERS, {
    variables: {
      maxRecords: recentOrdersCount
    }
  });


  if (revenueLoading || ordersByMonthLoading || allOrdersLoading || ordersByStatusLoading || recentOrdersLoading) {
    return (<h1> Loading ... </h1>)
  }

  const onRecentOrdersCountSubmit = (value) => {
    try {
      setRecentOrdersCount(parseInt(value, 10));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="App">
      <BoardItem label={'Total Orders'} value={allOrdersData.total}/>
      <BoardItem label={'Total Orders this month'} value={ordersByMonthData.total} />
      <BoardItem label={'Number of orders in progress'} value={ordersByStatusData.total} />
      <BoardItem label={'Total Revenue'} value={revenueData.data} />
      <BoardItem label={'Recent orders'}>
        <Input
          caption='Number of records to retrieve'
          inputType='number'
          placeholder='Number of records to retrieve'
          onSubmit={onRecentOrdersCountSubmit}
        />
        <OrderHeader />
        {
          recentOrdersData.data.map((item) => (
            <OrderItem data={item} />
          ))
        }
      </BoardItem>
    </div>
  );
}

export default App;
