import {
    ADD_TODO,
    ADD_TODO_IN_ORDER, COMPLETE_TASK,
    DELETE_ALL, DELETE_CHECKED,
    DELETE_TASK, SORT_TASKS,
    TOGGLE_SORT_ALPHABETICALLY
} from "../actions/actions.types";

const handleDeleteTask = (state, action) => {
    return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.id),
    };
};

const handleCompleteTask = (state, action) => {
    return {
        ...state,
        tasks: state.tasks.map((item) =>
            item.id !== action.id ? item : {...item, isCompleted: !item.isCompleted}
        ),
    };
};

const handleDeleteChecked = (state) => {
    return {
        ...state,
        tasks: state.tasks.filter((item) => item.isCompleted === false),
    };
};

const handleAddAlphabetically = (state, action) => {
    let newState = {
        ...state,
        tasks: [...state.tasks, action.payload],
        isSortON: false,
    };
    const sortedTasks = newState.tasks.sort((a, b) =>
        a.text.localeCompare(b.text)
    );
    return {
        tasks: sortedTasks,
        isSortON: true,
    };
};

const handleSort = (state) => {
    let newState = {
        ...state,
        tasks: [...state.tasks],
    };
    const sortedTasks = newState.tasks.sort((a, b) =>
        a.text.localeCompare(b.text)
    );
    sortedTasks.map((item) => ({...item, isSortedByAlphabet: true}));
    return {
        ...state,
        tasks: sortedTasks,
    }
}

const initialState = {tasks: [], isSortON: true};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return handleAddAlphabetically(state, action);

        case ADD_TODO_IN_ORDER:
            return {...state, tasks: [...state.tasks, action.payload]};

        case DELETE_ALL:
            return {
                ...state,
                tasks: [],
            };

        case TOGGLE_SORT_ALPHABETICALLY:
            return {
                ...state,
                isSortON: !state.isSortON,
            };

        case DELETE_TASK:
            return handleDeleteTask(state, action);

        case COMPLETE_TASK:
            return handleCompleteTask(state, action);

        case DELETE_CHECKED:
            return handleDeleteChecked(state);

        case SORT_TASKS:
            return handleSort(state);

        default:
            return state;
    }
}
