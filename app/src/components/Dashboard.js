import React from 'react';
import BoardItem from './BoardItem';

const Dashboard = ({ data }) => {
    return (
        <div>
            <BoardItem label='Revenue' value={data} />
        </div>
    )
};

export default Dashboard;