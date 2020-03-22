const defaultState = {
  list: [],
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'change_translations_list':
      return {
        ...state,
        list: [...action.list],
      }
    default: 
      return state;
  }
}

export default reducer;