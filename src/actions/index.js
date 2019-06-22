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
