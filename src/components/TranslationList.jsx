import React from 'react'
import Translation from './Translation';
import styles from '../styles/scrollable-menu.module.css';

const TranslationList = ({ translations, markEditing }) => (
  <div className={styles.scrollable}>
    {translations.map(translation =>
      <Translation
        key={translation.id}
        onClick={ () => markEditing(translation.id) }
        {...translation}
      />
    )}
  </div>
)

export default TranslationList
