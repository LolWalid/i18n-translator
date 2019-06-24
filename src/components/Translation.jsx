import React from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/selectable.module.css';

function Translation({ onClick, i18nKey, editing }) {
  return (
    <div onClick={onClick} className={classNames(styles.selectable, editing ? styles.active : '')}>
      <p>{i18nKey}</p>
    </div>
  )
}

export default Translation
