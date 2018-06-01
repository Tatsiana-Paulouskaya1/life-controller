const task = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
        parentTask: action.payload.parentTask,
      };
    case 'TOGGLE_TASK':
      if (state.id !== action.payload) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed,
      });
    default:
      return state;
  }
};
const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        task(undefined, action),
      ];
    case 'TOGGLE_TASK':
      return state.map(t =>
        task(t, action));
    default:
      return state;
  }
};

export default tasks;
