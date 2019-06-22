import { connect } from 'react-redux'
import { updateTranslation } from '../actions'
import TranslationForm from '../components/TranslationForm'

const getTranslation = (translations, filter) => {
  return translations.find(t => t.editing)
}

const mapStateToProps = state => ({
  translation: getTranslation(state.translations)
})

const mapDispatchToProps = dispatch => ({
  updateTranslation: id => dispatch(updateTranslation(id))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TranslationForm)
