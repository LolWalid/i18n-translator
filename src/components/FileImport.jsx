import React from 'react'
import { extractKeysFromJson, getValue } from '../utils/translationExtractor'

const FileImport = ({ addTranslation }) => {
  const handleFileRead = (event) => {
    var hash = JSON.parse(event.target.result)
    let langage = Object.keys(hash)[0]
    let json = hash[langage]

    var keys_array = extractKeysFromJson(json)
    keys_array.map(function(key) {
      return addTranslation({ key, langage: langage, translationValue: getValue(key.split('.'), json) })
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
