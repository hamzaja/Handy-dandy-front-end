const intialState =  {
  currentUser: [],
  allSkills: []
}
const reducer = (state = intialState , action ) => {

  switch (action.type) {

    case "currentUser":
      return {...state, currentUser:action.payload}

    case "allSkills":
      return {...state , allSkills:action.payload}

    default:
      return state

      }
  }


export default reducer
