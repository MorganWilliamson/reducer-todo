export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
];

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TASK":
            return[
                ...state, 
                {
                    item: action.item,
                    completed: false,
                    id: Date.now(),
                },
            ];
        case "TOGGLE_COMPLETE":
            return state.map(todo => {
                return todo.id === action.id ?
                {...todo, completed: !todo.completed} :
                todo;
            });
        case "REMOVE_TASK":
            return state.filter(todo => !todo.completed);
        default:
            return state;
    };
};