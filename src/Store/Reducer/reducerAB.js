import { UPDATA_A, UPDATA_B } from '../../constants';
const initialState = {
  a: 1,
  b: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATA_A:
      return ({
        ...state,
        a: state.a + state.b,
      });
    case UPDATA_B:
      return ({
        ...state,
        b: state.a + state.b,
      });
    default:
      return {
        ...state
      };
  }
}

export default reducer;
