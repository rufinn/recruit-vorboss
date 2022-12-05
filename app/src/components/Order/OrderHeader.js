import React from 'react';
import './orderItem.css';

const OrderHeader = () => {
    return (
        <div className='order-item header'>
            <div className='order-item__field'>Order ID</div>
            <div className='order-item__field'>Order Placed</div>
            <div className='order-item__field'>Order Status</div>
            <div className='order-item__field'>Product Name</div>
        </div>
    )
};

export default OrderHeader;