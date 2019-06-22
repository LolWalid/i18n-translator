import React from 'react'
import Translation from './Translation';

const TranslationList = ({ translations, markEditing }) => (
  <ul>
    {translations.map(translation =>
      <Translation
        key={translation.id}
        onClick={ () => markEditing(translation.id) }
        {...translation}
      />
    )}
  </ul>
)

export default TranslationList
