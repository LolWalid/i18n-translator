import { connect } from 'react-redux'
import { markEditing } from '../actions'
import TranslationList from '../components/TranslationList'


const getTranslations = (translations, filter) => {
    return translations
}

const mapStateToProps = state => ({
  translations: getTranslations(state.translations)
})

const mapDispatchToProps = dispatch => ({
  markEditing: id => dispatch(markEditing(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TranslationList)
