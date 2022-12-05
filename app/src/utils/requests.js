import { gql } from '@apollo/client';

export const QUERY_GET_ALL_REVENUE = gql(`{
    getAllRevenue {
        data
    }
}`);

export const QUERY_GET_ORDERS_BY_MONTH = gql(`
    query getOrdersByMonth($month: Int) {
        getOrdersByMonth(month: $month) {
            total
        }
    }
`);

export const QUERY_GET_ALL_ORDERS = gql(`{
    getAllOrders {
        total
    }
}`);

export const QUERY_GET_ORDERS_BY_STATUS = gql(`
    query getOrdersByStatus($status: String) {
        getOrdersByStatus(status: $status) {
            total
        }
    }
`);

export const QUERY_GET_RECENT_ORDERS = gql(`
    query getRecentOrders($maxRecords: Int) {
        getRecentOrders(maxRecords: $maxRecords) {
            total
            data {
                order_id
                order_placed
                order_status
                product_name
            }
        }
    }
`);