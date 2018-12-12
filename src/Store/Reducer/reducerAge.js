import { AGE_UP, AGE_DOWN, DEL_ITEM, LOADING } from '../../constants';
const initialState = {
  age: 21,
  history: [],
  loading: false,
};
const reducerAge = (state = initialState, action) => {
  switch (action.type) {
    case AGE_UP:
      return ({
        ...state,
        age: state.age + action.val,
        loading: false,
        history: state.history.concat({id: Math.random(), age: state.age + action.val})
      });
    case AGE_DOWN:
      return ({
        ...state,
        age: state.age - action.val,
        history: state.history.concat({id: Math.random(), age: state.age - action.val})
      });
    case DEL_ITEM:
      return ({
        ...state,
        history: state.history.filter(el => el.id !== action.key)
      });
    case LOADING:
      return ({
        ...state,
        loading: true
      });
    default:
      return {
        ...state,
      };
  }
}
export default reducerAge;

