import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducer'
import { BrowserRouter } from 'react-router-dom'

const createStoreWidthMiddleware = applyMiddleware(
    reduxThunk
)(createStore)

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider
            store = {createStoreWidthMiddleware(
                reducers,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>, document.getElementById('root'))