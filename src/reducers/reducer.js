const intialState =  {
  currentUser: [],
  allSkills: [],
  allUsers:[]
}
const reducer = (state = intialState , action ) => {

  switch (action.type) {

    case "currentUser":
      return { ...state, currentUser:action.payload }

    case "allSkills":
      return { ...state , allSkills:action.payload }

    case 'addskill':
      let newSkill = action.payload
      let newArray = [...state.allSkills, newSkill]
      return { ...state, allSkills: newArray }

    case 'allusers':
      let users = action.payload
      let newUserArray =  [...state.allUsers, users]
    return { ...state, allUsers: newUserArray }

    default:
      return state

      }
  }


export default reducer
