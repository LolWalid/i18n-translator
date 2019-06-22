import React from 'react';
import ListElement from './ListElement';
import Form from './Form';
import { keys } from '../config/Constants';

export default class List extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedKey: keys[0]
    }
  }

  onClick(selectedKey) {
    this.setState({ selectedKey })
  }

  render() {
    return (
      <div>
        {this.renderKeysList()}
        <Form
          selectedKey={this.state.selectedKey} />
      </div>
    )
  }

  renderKeysList() {
    return (keys.map((i18nKey, index) => {
      return <ListElement
              key={index}
              onClick={_ => this.onClick(i18nKey)}
              i18nKey={i18nKey} />
    }))
  }
}
