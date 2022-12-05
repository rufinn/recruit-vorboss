import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import BoardItem from '../components/BoardItem';
import OrderHeader from '../components/Order/OrderHeader';
import OrderItem from '../components/Order/OrderItem';
import { QUERY_GET_RECENT_ORDERS } from '../utils/requests';
import Input from '../components/Input/Input';

const RecentOrders = () => {
    const [ recentOrdersCount, setRecentOrdersCount ] = useState(5);
    const { loading, data, error } = useQuery(QUERY_GET_RECENT_ORDERS, {
        variables: {
            maxRecords: recentOrdersCount
        }
    });

    if (loading) {
        return (<h1> Loading ... </h1>);
    }

    if (error) {
        return (<h1> There is an error! </h1>);
    }

    const onRecentOrdersCountSubmit = (value) => {
        const count = parseInt(value, 10);
        if (count > 0) {
            setRecentOrdersCount(count);
        }
    }

    return (
        <BoardItem label={'Recent orders'}>
            <Input
            caption='Number of records to retrieve'
            inputType='number'
            placeholder='Number of records to retrieve'
            onSubmit={onRecentOrdersCountSubmit}
            />
            <OrderHeader />
            {
                data.getRecentOrders.data.map((item) => (
                    <OrderItem data={item} />
                ))
            }
      </BoardItem>
    )
};

export default RecentOrders;