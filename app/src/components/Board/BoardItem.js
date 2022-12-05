import React from 'react';
import './boardItem.css';

const BoardItem = ({ label, value, children, testId = '' }) => {

    return (
        <div className='board-item' data-testid={testId}>
            {
                label && <div data-testid='BOARD_LABEL' className='board-item__label'>{ label }</div>
            }
            {
                value && <div data-testid='BOARD_VALUE' className='board-item__value'>{ value }</div>
            }
            {
                children && <div data-testid='BOARD_CHILDREN' className='board-item__value'>{ children }</div>
            }
        </div>
    )
};

export default BoardItem;