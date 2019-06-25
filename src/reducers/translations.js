const translations = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRANSLATION':
      let foundIndex = state.findIndex(translation => ( translation.i18nKey === action.key))
      if (foundIndex !== -1) {
        return state.map((translation, index) => (
          index === foundIndex ? {...translation, [action.langage]: action.translationValue} : translation
        ))
      } else {
        return [
          ...state,
          {
            id: action.key,
            i18nKey: action.key,
            [action.langage]: action.translationValue,
            // fr: action.fr,
            // en: action.en,
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


