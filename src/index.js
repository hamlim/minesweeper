import React from 'react'
import ReactDOM from 'react-dom'
import Sweeper from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(<Sweeper />, document.getElementById('root'))
registerServiceWorker()
