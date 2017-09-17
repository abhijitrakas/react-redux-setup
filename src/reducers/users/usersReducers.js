export const usersReducers = (state = [], actions) => {
    switch(actions.type) {
        case 'CREATE_USER':
            return [
                ...state,
                Object.assign({}, actions.users)
            ];
        default:
          return state;
    }
};