const aim = (state, action) => {
  switch (action.type) {
    case 'ADD_AIM':
      return {
        id: action.payload.id,
        name: action.payload.name,
        completed: false,
        parentSphere: action.payload.parentSphere,
      };
    default:
      return state;
  }
};
const aims = (state = [], action) => {
  switch (action.type) {
    case 'ADD_AIM':
      return [
        ...state,
        aim(undefined, action),
      ];
    case 'DELETE_AIM':
      return state.filter(item => (
        item.id !== action.payload.id && item.parentSphere !== action.payload.id));
    default:
      return state;
  }
};
export default aims;
