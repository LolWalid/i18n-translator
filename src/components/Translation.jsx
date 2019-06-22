import React from 'react';

const Translation = ({ onClick, i18nKey, editing }) => (
  <div onClick={onClick} style={{'background-color': editing ? 'red' : '', cursor: 'pointer' }}>
    <p>{i18nKey}</p>
  </div>
)

export default Translation
