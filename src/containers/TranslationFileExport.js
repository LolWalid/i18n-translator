import { connect } from 'react-redux'
import ExportButton from '../components/ExportButton'

const mapStateToProps = state => ({
  translations: state.translations
})

export default connect(
  mapStateToProps,
  null
)(ExportButton)
