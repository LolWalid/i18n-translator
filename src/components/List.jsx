import React from 'react';
import Element from './Element';
import Form from './Form';

export default class List extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      keys: ['a', 'b', 'c.d'],
      selectedKey: 'a'
    }
  }

  onClick(i18nKey) {
    this.setState({ selectedKey: i18nKey})
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
    return (this.state.keys.map((i18nKey, index) => {
      return <Element
              key={index}
              onClick={_ => this.onClick(i18nKey)}
              i18nKey={i18nKey} />
    }))
  }
}
