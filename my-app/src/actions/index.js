export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const ADD_AIM = 'ADD_AIM';
export const DELETE_AIM = 'DELETE_AIM';

const nextAimId = 1;
const nextTaskId = 0;

export const addAim = (name, parentSphere) => (
  {
    type: ADD_AIM,
    payload: {
      name,
      id: nextAimId + 1,
      parentSphere,
    },
  }
);

export const deleteAim = id => (
  {
    type: DELETE_AIM,
    payload: {
      id,
    },
  }
);

export const addTask = (text, parentTask) => (
  {
    type: ADD_TASK,
    payload: {
      text,
      id: nextTaskId + 1,
      parentTask,
    },
  }
);

export const toggleTask = id => (
  {
    type: TOGGLE_TASK,
    payload: id,
  }
);
