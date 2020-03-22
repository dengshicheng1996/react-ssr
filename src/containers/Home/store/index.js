const defaultState = {
  list: [],
  name: 'hello'
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'change_home_list':
      return {
        ...state,
        list: [...action.list],
      }
    default: 
      return state;
  }
}

export default reducer;