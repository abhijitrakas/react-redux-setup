import React from 'react';
import Input from '../input/index';

const BootstrapInput = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.inputDataName}>{props.dataLabel}:</label>
            <Input dataType={props.inputDataType} classes={props.inputDataClasses} dataName={props.inputDataName} dataRef={props.inputDataRef} />
        </div>
    );
};

export default BootstrapInput;