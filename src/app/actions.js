export const addToDoDefaultByAlphabet = (oneMoreTask) => ({
  type: "ADD_TODO",
  payload: oneMoreTask,
});

export const deleteAll = () => ({
  type: "DELETE_ALL",
});

export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  id,
});

export const completeTask = (id) => ({
  type: "COMPLETE_TASK",
  id,
});

export const deleteChecked = () => ({
  type: "DELETE_CHECKED",
});

export const TurnOFFAlphabeticallyOrder = () => ({
  type: "SORT_ALPHABETICALLY",
});

export const addToDoInOrder = (oneMoreTask) => ({
  type: "ADD_TODO_IN_ORDER",
  payload: oneMoreTask,
});
