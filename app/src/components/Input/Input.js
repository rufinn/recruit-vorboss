import React, { useState } from 'react';
import './input.css';

const Input = ({ caption, inputType, placeholder, onSubmit = () => {} }) => {

    const [value, setValue] = useState(null);

    const onChange = (evt) => {
        evt.preventDefault();
        setValue(evt.target?.value);
    };

    const onButtonClick = (evt) => {
        evt.preventDefault();
        onSubmit(value);
    }

    return (
        <div className='input'>
            {
                caption &&
                    <label className='input__caption'>
                        { caption }: 
                    </label>
            }
            {
                inputType &&
                    <input
                        className='input__input'
                        type={inputType}
                        placeholder={placeholder}
                        onChange={onChange}
                    />
            }
            {
                inputType &&
                    <button
                        className='input__submit'
                        onClick={onButtonClick}
                    >
                        Submit
                    </button>
            }
        </div>
    )
};

export default Input;