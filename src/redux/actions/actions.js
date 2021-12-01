import {
    ADD_TODO, ADD_TODO_IN_ORDER,
    COMPLETE_TASK,
    DELETE_ALL,
    DELETE_CHECKED,
    DELETE_TASK, SORT_TASKS,
    TOGGLE_SORT_ALPHABETICALLY
} from "./actions.types";

export const addToDoDefaultByAlphabet = (oneMoreTask) => ({
    type: ADD_TODO,
    payload: oneMoreTask,
});

export const deleteAll = () => ({
    type: DELETE_ALL,
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    id,
});

export const completeTask = (id) => ({
    type: COMPLETE_TASK,
    id,
});

export const deleteChecked = () => ({
    type: DELETE_CHECKED,
});

export const toggleAlphabeticallyOrder = () => ({
    type: TOGGLE_SORT_ALPHABETICALLY,
});

export const addToDoInOrder = (oneMoreTask) => ({
    type: ADD_TODO_IN_ORDER,
    payload: oneMoreTask,
});

export const sortTasks = () => ({
    type: SORT_TASKS,
});
