
var reducers = reducers || {};   
const getAction = (type, payload) => ({ type, payload });

const actions = {
    UPDATE_CURRENT_TODO: 'UPDATE/CURRENT',
    REMOVE_CURRENT_TODO: 'REMOVE/CURRENT',
    REMOVE_TODO: 'REMOVE/TODO',
    ADD_TODO: 'ADD/TODO',
    UPDATE_TODO: 'UPDATE/TODO',
};

    reducers.currentTodo = (state = null, action) => {
        switch (action.type) {
            case 'UPDATE/CURRENT':
                return action.payload;
            case 'REMOVE/CURRENT':
                return null;     
            default:
                return state;
        };
    },

    reducers.todoList = (state = [], action) => {
        switch (action.type) {
            case 'REMOVE/TODO':
                return state.filter((todo) => todo.id !== action.payload)
            case 'ADD/TODO':
                return state = [...state, action.payload]
            case 'UPDATE/TODO':
                return
            default:
                return state;             
        };
    }


