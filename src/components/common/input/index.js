import React from 'react';

const Input = (props) => {
    return <input type={props.dataType} className={props.classes} onChange={props.changeEvent}  id={props.dataName} name={props.dataName} />;
};

export default Input;