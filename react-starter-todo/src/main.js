import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'

import './style/main'

const rootElement = document.querySelector('#app')

ReactDOM.render(<App />, rootElement, () => console.log('React is working!'))
