import React from 'react'
import { extractKeysFromJson, getValue } from '../utils/translationExtractor'

const FileImport = ({ addTranslation }) => {
  let fileReader

  const handleFileRead = () => {
    var hash = JSON.parse(fileReader.result).fr
    var keys_array = extractKeysFromJson(hash)
    keys_array.map(function(key) {
      return addTranslation(key, getValue(key.split('.'), hash), null)
    })
  }

  const onFileUploaded = (event) => {
    event.preventDefault()
    fileReader = new FileReader()
    fileReader.onloadend = handleFileRead
    fileReader.readAsText(event.target.files[0])
  }

  return (
    <input type="file" onChange={e => onFileUploaded(e)}/>
  )
}


export default FileImport;
