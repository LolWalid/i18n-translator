const translations = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRANSLATION':
      let index = state.findIndex(translation => ( translation.i18nKey === action.key))
      if (index !== -1) {
        return state
      } else {
        return [
          ...state,
          {
            id: action.key,
            i18nKey: action.key,
            fr: action.fr,
            en: action.en,
            editing: false
          }
        ]
      }
    case 'EDIT_TRANSLATION':
      return state.map(translation => (
        translation.id === action.id) ? {...translation, fr: action.fr, en: action.en} : translation
      )
    case 'MARK_EDITING':
      return state.map(translation => (
        translation.id === action.id) ? {...translation, editing: true} : { ...translation, editing: false }
      )
    default:
      return state
  }
}

export default translations


