import React from 'react'
import FormInput from './FormInput';

class TranslationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...props.translation }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (state.id !== props.translation.id) {
      return { ...props.translation }
    }
    return null;
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updateTranslation({...this.props.translation, ...this.state});
  }

  onInputChange({locale, translation}) {
    this.setState({[locale]: translation})
  }

  render() {
    let { translation } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <FormInput
          locale={'fr'}
          selectedKey={translation.i18nKey}
          translation={translation.fr}
          onChange={this.onInputChange}
        />
        <FormInput
          locale={'en'}
          selectedKey={translation.i18nKey}
          translation={translation.en}
          onChange={this.onInputChange}
        />
        <button type="submit"> Save </button>
      </form>
    )
  }
}

export default TranslationForm
