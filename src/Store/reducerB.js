import { UPDATA_B } from '../constants';
const initialState = {
  a: 1,
  b: 1,
};

const reducerB = (state = initialState, action) => {
  switch (action.type) {
    case UPDATA_B:
      return ({
        ...state,
        b: action.a + state.b,
      });
    default:
      return {
        ...state
      };
  }
}

export default reducerB;
