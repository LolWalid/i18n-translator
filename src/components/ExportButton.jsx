import React from 'react';
import { jsonFromTranslations } from '../utils/exportToJson'

const ExportButton = ({translations}) => {
  const exportToJson = (event) => {
    event.preventDefault()
    let jsons = jsonFromTranslations(translations)
    console.log(jsons)
    // TODO iterate throws 'jsons' arrays and add link to download each or zipot !
  }

  return (<button onClick={e => exportToJson(e)}>Export</button>)
}

export default ExportButton
