import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const InitialState = {
  Tasks: [],
  Input: ""
};

export const reducer = (state=InitialState, action) =>{
  switch(action.type){
    case "ADD_TASK":
      return {
         ...InitialState,
        Tasks: [...state.Tasks, state.Input]
      }
      case "CHANGE_INPUT":
        return {
          ...state,
        Input: action.inputValue
        }
    default:
      return state;
  }
};

export const addTask = () => dispatch =>{
  return dispatch({
    type: "ADD_TASK",
    
  });
}

export const changeInput = (value) => dispatch =>{
  return dispatch({
    type: "CHANGE_INPUT",
    inputValue: value,
  });
}

export function initializeStore(){
  return createStore(reducer, InitialState, applyMiddleware(thunkMiddleware));
}