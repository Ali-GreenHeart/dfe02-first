const initialStore = {
    users: [],
    counter: 0
}
const rootReducer = (store = initialStore, action) => {
    switch (action.type) {
        case 'get_users':
            return { ...store, users: action.payload }
        case 'delete_all_users':
            return { ...store, users: [] }
        case 'increment':
            return { ...store, counter: store.counter + 1 }
        default:
            return store;
    }
}

export default rootReducer;
