import { ADD_TASK } from "../action-types/action-types";
export const addTaskAction = (payload) => ({
  type: ADD_TASK,
  payload,
});
