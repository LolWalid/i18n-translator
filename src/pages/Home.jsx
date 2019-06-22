import React from 'react';
import TranslationList from '../containers/TranslationList'
import TranslationForm from '../containers/TranslationForm'

export default class Home extends React.Component{
  render() {
    return (
      <div>
        <TranslationList />
        <TranslationForm />
      </div>
    )
  }
}
