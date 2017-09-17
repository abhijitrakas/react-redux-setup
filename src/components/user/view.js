import React from 'react';

export default class View extends React.Component
{
    render() {
        return (
            <div>
                <h1>View User Details</h1>
                <div>Username: {this.props.match.params.username}</div>
            </div>
        );
    }

}
