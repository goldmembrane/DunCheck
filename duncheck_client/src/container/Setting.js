import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Equipment from './setting/Equipment'
import Damage from './setting/Damage'
import BuffScore from './setting/BuffScore'


const Setting = () => {
    return( 
        <>
            <Router>
                <div className = 'setting-cut-box'>
                    <ul className = 'setting-menu-navigation'>
                        <li className = 'setting-menu'><Link to = '/setting/equipment' style = {{ textDecoration : 'none' }}>장비</Link></li>
                        <li className = 'setting-menu'><Link to = '/setting/damage' style = {{ textDecoration : 'none'}}>딜표</Link></li>
                        <li className = 'setting-menu'><Link to = '/setting/buffscore' style = {{ textDecoration : 'none'}}>버프력</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route path = '/setting/equipment' component = {Equipment}/>
                    <Route path = '/setting/damage' component = {Damage} />
                    <Route path = '/setting/buffscore' component = {BuffScore} />
                </Switch>
            </Router>
        </>
    )
}

export default Setting