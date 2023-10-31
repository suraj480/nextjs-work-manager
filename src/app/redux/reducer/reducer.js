import { combineReducers } from "redux";
import { ADD_TASK } from "../action-types/action-types";

const initialState = {
  taskList: [],
};

const workDetails = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  workDetails,
});

export default rootReducer;
