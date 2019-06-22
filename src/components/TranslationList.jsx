// import React from 'react';
// import Translation from './Translation';
// import Form from './Form';
// import { keys } from '../config/Constants';


import React from 'react'
import Translation from './Translation';

const TranslationList = ({ translations, markEditing }) => (
  <ul>
    {translations.map(translation =>
      <Translation
        key={translation.id}
        onClick={ () => markEditing(translation.id) }
        {...translation}
      />
    )}
  </ul>
)

export default TranslationList


// export default class TranslationList extends React.Component{
//   constructor(props) {
//     super(props)
//     this.state = {
//       selectedKey: keys[0]
//     }
//   }

//   onClick(selectedKey) {
//     this.setState({ selectedKey })
//   }

//   render() {
//     return (
//       <div>
//         {this.renderKeysList()}
//         <Form
//           selectedKey={this.state.selectedKey} />
//       </div>
//     )
//   }

//   renderKeysList() {
//     return (keys.map((i18nKey, index) => {
//       return <Translation
//               key={index}
//               onClick={_ => this.onClick(i18nKey)}
//               i18nKey={i18nKey} />
//     }))
//   }
// }
