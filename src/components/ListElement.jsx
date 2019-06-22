import React from 'react';

export default class ListElement extends React.Component{
  render() {
    return (
      <div onClick={this.props.onClick}>
        <p>{this.props.i18nKey}</p>
      </div>
    )
  }
}
