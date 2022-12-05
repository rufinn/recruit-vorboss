import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import BoardItem from '../components/BoardItem';
import { QUERY_GET_ORDERS_BY_STATUS } from '../utils/requests';
import Input from '../components/Input/Input';

const RecentOrders = () => {
    const validStatus = ['in_progress', 'shipped', 'placed', 'cancelled'];
    const [ status, setStatus ] = useState('in_progress');
    const { loading, data, error } = useQuery(QUERY_GET_ORDERS_BY_STATUS, {
        variables: {
            status,
        }
    });

    if (loading) {
        return (<h1> Loading ... </h1>);
    }

    if (error) {
        return (<h1> There is an error! </h1>);
    }


    const onRecentOrdersCountSubmit = (value) => {
        if (validStatus.indexOf(value) >= 0) {
            setStatus(value);
        } else {
            alert('Invalid status.');
        }
    }

    return (
        <BoardItem label={`Number of orders with status ${status}`} value={data.getOrdersByStatus.total}>
            <Input
            caption='Status'
            inputType='text'
            placeholder='e.g. in_progress'
            onSubmit={onRecentOrdersCountSubmit}
            />
            <pre> Valid status are {validStatus.join(', ')}.</pre>
      </BoardItem>
    )
};

export default RecentOrders;