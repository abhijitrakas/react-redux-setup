import React from 'react'
import { connect } from 'react-redux';
import AddUserForm from './add';
import * as userActions from '../../actions/users/createUsers';
import Table from '../common/table/Table';

class Users extends React.Component
{
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.state = {'email': '', 'username': ''};
    }

    inputChange(event) {
        this.setState({[event.target.name]:event.target.value});
    }

    formSubmit(event) {
        event.preventDefault();
        this.props.createUser(this.state);
    }

    render() {
        let inputVal = this.state;
        let column = {two: 'Email', first:'Username'};
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Users Page</h3>
                        <div><Table classes="table table-bordered" titleList={column} dataSet={this.props.users} /></div>
                    </div>
                    <div className="col-md-6">
                        <h3>Add User</h3>
                        <div>
                            <AddUserForm handleForm={this.formSubmit} dataVal={inputVal} inptChange={this.inputChange} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    users: state.users
});

const mapDispatchToProps = (dispatch) => ({
    createUser: user => dispatch(userActions.createUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(Users);