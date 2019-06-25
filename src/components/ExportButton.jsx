import React from 'react';
import { jsonFromTranslations } from '../utils/exportToJson'

class ExportButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { jsons: [] }
  }

  exportToJson(event) {
    event.preventDefault()
    let jsons = jsonFromTranslations(this.props.translations)
    this.setState({jsons})
  }

  render () {
    return (
      <div>
        <button onClick={e => this.exportToJson(e)}>Export</button>
        { this.renderLinks() }
      </div>
    )
  }

  renderLinks() {
    return this.state.jsons.map(json => {
      let filename = `${Object.keys(json)[0]}.json`
      return (
        [<br/>,
          <a href={hrefFromJson(json)} key={filename}
             download={filename}>
            {filename}
          </a>
        ]
      )
    })
  }
}

export default ExportButton

function hrefFromJson(json) {
  return `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(json))}`
}
