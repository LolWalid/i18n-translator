import { connect } from 'react-redux'
import { addTranslation } from '../actions'
import FileImport from '../components/FileImport'

const mapDispatchToProps = dispatch => ({
  addTranslation: ({key, langage, translationValue}) => dispatch(addTranslation({key, langage, translationValue}))
})

export default connect(
  null,
  mapDispatchToProps
)(FileImport)
