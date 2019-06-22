import React from 'react';
import FormInput from './FormInput';
import { availableLocales, translations } from '../config/Constants'

export default class Form extends React.Component {
  render() {
    return (<div>{ this.availableLocalesForm() }</div>)
  }

  availableLocalesForm() {
    return (
      availableLocales.map( (locale, index) => {
        return (<FormInput
          key={index}
          locale={locale}
          selectedKey={this.props.selectedKey}
          translation={translations[this.props.selectedKey][locale]}
          />)
      })
    )
  }
}
