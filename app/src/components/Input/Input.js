import React, { useState } from 'react';
import './input.css';

const Input = ({ caption, inputType, placeholder, onSubmit = () => {}, testid = '' }) => {
    const [value, setValue] = useState(null);

    if (!inputType) {
        return null;
    }

    const onChange = (evt) => {
        evt.preventDefault();
        setValue(evt.target?.value);
    };

    const onButtonClick = (evt) => {
        evt.preventDefault();
        onSubmit(value);
    }

    return (
        <div data-testid={testid} className='input'>
            {
                caption &&
                    <label data-testid={`${testid}INPUT_CAPTION`} className='input__caption'>
                        { caption }: 
                    </label>
            }
            <input
            data-testid={`${testid}INPUT_INPUT`} 
                className='input__input'
                type={inputType}
                placeholder={placeholder}
                onChange={onChange}
            />
            <button
                data-testid={`${testid}INPUT_SUBMIT`} 
                className='input__submit'
                onClick={onButtonClick}
            >
                Submit
            </button>
        </div>
    )
};

export default Input;