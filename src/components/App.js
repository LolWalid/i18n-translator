import React from 'react';
import './App.css';
import TranslationList from '../containers/TranslationList'
import TranslationForm from '../containers/TranslationForm'

function App() {
  return (
    <div className="App">
      <TranslationList />
      <TranslationForm />
    </div>
  );
}

export default App;
