export const addTranslation = ({key, fr, en}) => ({
  type: 'ADD_TRANSLATION',
  key,
  fr,
  en
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
