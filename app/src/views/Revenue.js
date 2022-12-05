import React from 'react';
import { useQuery } from "@apollo/client";
import BoardItem from '../components/BoardItem';
import { QUERY_GET_ALL_REVENUE } from '../utils/requests';

const RecentOrders = () => {
    const { loading, data, error } = useQuery(QUERY_GET_ALL_REVENUE);


    if (loading) {
        return (<h1> Loading ... </h1>);
    }

    if (error) {
        return (<h1> There is an error! </h1>);
    }

    return (
        <BoardItem label={'Total Revenue'} value={data.getAllRevenue.data} />
    )
};

export default RecentOrders;