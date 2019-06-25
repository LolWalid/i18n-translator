export const addTranslation = ({key, langage, translationValue}) => ({
  type: 'ADD_TRANSLATION',
  key,
  langage,
  translationValue
})

export const markEditing = id => ({
  type: 'MARK_EDITING',
  id
})

export const updateTranslation = ({id, fr, en}) => ({
  type: 'EDIT_TRANSLATION',
  id,
  fr,
  en
})
