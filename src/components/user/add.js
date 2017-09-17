import React from 'react';
import Input from '../common/input/index';

const AddUserForm = (props) => {
    return (
        <form onSubmit={props.handleForm}>
            <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <Input dataType="email" classes="form-control" dataName="email" dataVal={props.dataVal.email} changeEvent={props.inptChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="username">User Name:</label>
                <Input dataType="text" classes="form-control" dataName="username" dataVal={props.dataVal.username} changeEvent={props.inptChange}/>
            </div>
            <button type="submit" className="btn btn-success">Save</button>
        </form>
    );
}

export default AddUserForm;