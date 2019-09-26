const intialState =  {
  currentUser: ''
}
const reducer = (state = intialState , action ) => {
  switch (action.type) {
    case "currentUser":
    return {...state, currentUser:action.payload}

    default:
    return state
  }
}
export default reducer
