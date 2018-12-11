import { UPDATA_A } from '../constants';
const initialState = {
  a: 1,
};

const reducerA = (state = initialState, action) => {
  switch (action.type) {
    case UPDATA_A:
      return ({
        ...state,
        a: state.a + action.b,
      });
    default:
      return {
        ...state,
      };
  }
}

export default reducerA;
