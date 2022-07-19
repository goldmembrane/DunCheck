import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './Pages/Main'
import Profile from './Pages/Profile'

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component = {Main} />
                    <Route path="/profile" component = {Profile}/>
                </Switch>
            </Router>
        </>
    )
}

export default App