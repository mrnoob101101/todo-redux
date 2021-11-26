const handleDeleteTask = (state, action) => {
  return {
    tasks: state.tasks.filter((item) => item.id !== action.id),
  };
};

const handleCompleteTask = (state, action) => {
  return {
    tasks: state.tasks.map((item) =>
      item.id !== action.id ? item : { ...item, isCompleted: !item.isCompleted }
    ),
  };
};

const handleDeleteChecked = (state) => {
  return {
    tasks: state.tasks.filter((item) => item.isCompleted === false),
  };
};

const handleAddAlphabetically = (state, action) => {
  let newState = Object.assign(state);
  newState = {
    ...newState,
    tasks: [...state.tasks, action.payload],
    isSortON: true,
  };
  const sortedTasks = Object.assign(newState).tasks.sort((a, b) =>
    a.text.localeCompare(b.text)
  );
  return {
    tasks: sortedTasks,
    isSortON: true,
  };
};

const handleDontSortAlphabetically = (state) => {
  return {
    ...state,
    isSortON: false,
  };
};

const initialState = { tasks: [], isSortON: true };

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return handleAddAlphabetically(state, action);

    case "ADD_TODO_IN_ORDER":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "DELETE_ALL":
      return {
        ...state,
        tasks: [],
      };

    case "DELETE_TASK":
      return handleDeleteTask(state, action);

    case "COMPLETE_TASK":
      return handleCompleteTask(state, action);

    case "DELETE_CHECKED":
      return handleDeleteChecked(state);

    case "SORT_ALPHABETICALLY":
      return handleDontSortAlphabetically(state);

    default:
      return state;
  }
}
