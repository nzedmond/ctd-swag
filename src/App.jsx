import React from 'recat';
import ctdLogo from './assets/mono-blue-logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="coming-soon">
//       <h1>CTD Swag</h1>
//       <div style={{ height: 100, width: 100 }}>
//         <img src={ctdLogo} alt="Code The Dream Logo" />
//       </div>
//       <h2>Coming Soon...</h2>
//     </div>
//   );
// }

// export default App;

function App(){
  return React.createElement(
    'div',
    {
      className: 'coming-soon',
    },
    React.createElement('h1', null, 'CTD Swag'),
    React.createElement(
      'div',
      {
        style: {
          height: 100,
          width: 100,
        },
      },
      React.createElement('img', {
        src: ctdLogo,
        alt: 'Code The Dream Logo',
      }),
    ),
    React.createElement('h2', null, 'Coming Soon...'),
  );
}

export default App;