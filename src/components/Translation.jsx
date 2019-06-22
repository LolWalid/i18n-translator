import React from 'react';

// export default class Translation extends React.Component {
//   render() {
//     return (
//       <div onClick={this.props.onClick} >
//         <p>{this.props.i18nKey}</p>
//       </div>
//     )
//   }
// }

const Translation = ({ onClick, i18nKey }) => (
  <div onClick={onClick} >
    <p>{i18nKey}</p>
  </div>
)

export default Translation
