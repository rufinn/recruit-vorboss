import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import BoardItem from '../components/Board/BoardItem';
import { QUERY_GET_ORDERS_BY_MONTH } from '../utils/requests';
import Input from '../components/Input/Input';

const RecentOrders = () => {
    const curMonth = (new Date()).getMonth() + 1;
    const [ month, setMonth ] = useState(curMonth);
    const { loading, data, error } = useQuery(QUERY_GET_ORDERS_BY_MONTH, {
        variables: {
            month,
        }
    });

    if (loading) {
        return (<h1> Loading ... </h1>);
    }

    if (error) {
        return (<h1> There is an error! </h1>);
    }


    const onRecentOrdersCountSubmit = (value) => {
        const intValue = parseInt(value, 10);
        if (intValue < 1 || intValue > 12) {
            alert('Invalid month.');
            return;
        }

        setMonth(intValue);
    }

    return (
        <BoardItem label={'Total Orders of the month'} value={data.getOrdersByMonth.total}>
            <Input
            caption='Month (1-12)'
            inputType='number'
            placeholder='Month (1-12)'
            onSubmit={onRecentOrdersCountSubmit}
            />
      </BoardItem>
    )
};

export default RecentOrders;