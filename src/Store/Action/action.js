import { AGE_UP, AGE_DOWN, LOADING } from '../../constants';

export const loading = () => {
  return ({
    type: LOADING,
  });
};

export const ageUpAsnc = val => {
  return ({
    type: AGE_UP,
    val: val,
  });
};

// 异步调用的模版
export const ageUp = val => {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(ageUpAsnc(val));
    }, 5000);
  }
};


export const ageDown = val => {
  return ({
    type: AGE_DOWN,
    val: val,
  });
};


