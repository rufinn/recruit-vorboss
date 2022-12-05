import React from 'react';
import './orderItem.css';

const OrderItem = ({ data }) => {
    const { order_id, order_placed, product_name, order_status } = data;
    return (
        <div className='order-item'>
            <div className='order-item__field'>{order_id}</div>
            <div className='order-item__field'>{order_placed}</div>
            <div className='order-item__field'>{order_status}</div>
            <div className='order-item__field'>{product_name}</div>
        </div>
    )
};

export default OrderItem;