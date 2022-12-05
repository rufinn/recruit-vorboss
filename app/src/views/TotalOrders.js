import React from 'react';
import { useQuery } from "@apollo/client";
import BoardItem from '../components/BoardItem';
import { QUERY_GET_ALL_ORDERS } from '../utils/requests';

const RecentOrders = () => {
    const { loading, data, error } = useQuery(QUERY_GET_ALL_ORDERS);

    if (loading) {
        return (<h1> Loading ... </h1>);
    }

    if (error) {
        return (<h1> There is an error! </h1>);
    }

    return (
        <BoardItem label={'Total Orders'} value={data.getAllOrders.total} />
    )
};

export default RecentOrders;