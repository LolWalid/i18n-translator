import React from 'react';
import './App.css';
import TranslationList from '../containers/TranslationList'
import TranslationForm from '../containers/TranslationForm'
import TranslationFileInput from '../containers/TranslationFileInput'
import TranslationFileExport from '../containers/TranslationFileExport'

function App() {
  return (
    <div className="App">
      <TranslationFileInput />
      <TranslationFileExport />
      <TranslationList />
      <TranslationForm />
    </div>
  );
}

export default App;
