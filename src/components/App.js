import React from 'react';
import './App.css';
import TranslationList from '../containers/TranslationList'
import TranslationForm from '../containers/TranslationForm'
import TranslationFileInput from '../containers/TranslationFileInput'

function App() {
  return (
    <div className="App">
      <TranslationFileInput />
      <TranslationList />
      <TranslationForm />
    </div>
  );
}

export default App;
