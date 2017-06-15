import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import injectTapEventPlugin from 'react-tap-event-plugin'

import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(<App />, document.getElementById('root'))
injectTapEventPlugin()
registerServiceWorker()
