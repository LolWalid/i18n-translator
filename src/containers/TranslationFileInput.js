import { connect } from 'react-redux'
import { addTranslation } from '../actions'
import FileImport from '../components/FileImport'

const mapDispatchToProps = dispatch => ({
  addTranslation: (key, fr, en) => dispatch(addTranslation({key, fr, en}))
})

export default connect(
  null,
  mapDispatchToProps
)(FileImport)
