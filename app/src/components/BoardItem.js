import React from 'react';
import './boardItem.css';

const BoardItem = ({ label, value, children }) => {

    return (
        <div className='board-item'>
            {
                label && <div className='board-item__label'>{ label }</div>
            }
            {
                value && <div className='board-item__value'>{ value }</div>
            }
            {
                children && <div className='board-item__value'>{ children }</div>
            }
        </div>
    )
};

export default BoardItem;