import React from 'react';

export default class Element extends React.Component{
  render() {
    return (
      <div onClick={this.props.onClick}>
        <p>{this.props.i18nKey}</p>
      </div>
    )
  }
}
