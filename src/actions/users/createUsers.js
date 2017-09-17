import React from 'react';
import { Link } from 'react-router-dom';

export const createUser = (users) => ({
    type: "CREATE_USER",
    users: setUsersData(users)
});

export const setUsersData = (users) => {
    if (users && users.username && users.username != '') {
        let link = "/user/"+users.username;
        users.username = <Link to={link} replace={true}>{users.username}</Link>;
        return users;
    }
    return users;
};