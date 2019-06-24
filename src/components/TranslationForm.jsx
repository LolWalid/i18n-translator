import React from 'react'
import FormInput from './FormInput';
import styles from '../styles/scrollable-menu.module.css';

class TranslationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...props.translation }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.translation && state.id === props.translation.id) {
      return null
    } else {
      return { ...props.translation }
    }
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
      <div className={styles.scrollable}>
      { translation &&
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
        }
      </div>
    )
  }
}

export default TranslationForm
