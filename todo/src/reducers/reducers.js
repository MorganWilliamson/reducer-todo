export const initialState = [
    {
        item: 'Do laundry',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Wash clothes',
        completed: false,
        id: 3892987584
    },
    {
        item: 'Empty hamper into washing machine',
        completed: false,
        id: 3892987585
    },
    {
        item: 'Dry clothes',
        completed: false,
        id: 3892987586
    },
];

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TASK":
            return[
                ...state, 
                {
                    item: action.payload,
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