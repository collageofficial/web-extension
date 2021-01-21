import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import CollageContext from './Context/Context'

ReactDOM.render(
    <React.StrictMode>
        <CollageContext>
            <App />
        </CollageContext>
    </React.StrictMode>,
    document.getElementById('root')
)
