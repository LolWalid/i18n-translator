const translations = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRANSLATION':
      return [
        ...state,
        {
          id: state.length + 1,
          key: action.key,
          fr: action.fr,
          en: action.en,
          editing: false
        }
      ]
    case 'MARK_EDITING':
      return state.map(translation => (
        translation.id === action.id) ? {...translation, editing: true} : { ...translation, editing: false }
      )
    default:
      return state
  }
}

export default translations


