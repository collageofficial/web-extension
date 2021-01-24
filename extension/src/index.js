import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './tailwind.output.css'

import Provider from './Context/Context'

ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
