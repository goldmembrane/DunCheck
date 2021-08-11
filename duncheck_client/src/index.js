import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducer'

const createStoreWidthMiddleware = applyMiddleware(
    reduxThunk
)(createStore)

ReactDOM.render(
    <React.StrictMode>
        <Provider
        store = {createStoreWidthMiddleware(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENTION__&&
            window.__REDUX_DEVTOOLS_EXTENTION__()
        )}>
            <App />
        </Provider>
    </React.StrictMode>, document.getElementById('root'))