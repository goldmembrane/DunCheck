import React from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import Setting from './container/Setting'
import Main from './container/Main'

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path = '/' component = {Main}/>
                    <Route path = '/setting' component = {Setting} />
                </Switch>
            </Router>
        </>
    )
}

export default withRouter(App)