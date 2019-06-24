import React from 'react'
import { extractKeysFromJson, getValue } from '../utils/translationExtractor'

const FileImport = ({ addTranslation }) => {
  const handleFileRead = (event) => {
    var hash = JSON.parse(event.target.result).fr
    var keys_array = extractKeysFromJson(hash)
    keys_array.map(function(key) {
      return addTranslation(key, getValue(key.split('.'), hash), null)
    })
  }

  const onFileUploaded = (event) => {
    event.preventDefault()
    Array.from(event.target.files).forEach(file => {
      let fileReader = new FileReader()
      fileReader.onloadend = handleFileRead
      fileReader.readAsText(file)
     });
  }

  return (
    <input type="file" multiple={true} accept=".json,application/json" onChange={e => onFileUploaded(e)}/>
  )
}


export default FileImport;
