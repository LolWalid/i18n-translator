import React from 'react';

export default class FormInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectedKey: this.props.selectedKey,
      translation: this.props.translation || ''
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.selectedKey !== props.selectedKey) {
      return {
        selectedKey: props.selectedKey,
        translation: props.translation || ''
      }
    }
    return null;
  }

  handleChange(event) {
    this.setState({translation: event.target.value})
  }

  render() {
    return (
      <div>
        <h1>{this.props.locale}</h1>
        <textarea value={this.state.translation} rows="4" cols="50" onChange={this.handleChange}/>
      </div>
    )
  }
}
