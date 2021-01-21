import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import CollageContext from './Context/Context'

ReactDOM.render(
    <React.StrictMode>
        <CollageContext>
            <App />
        </CollageContext>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
