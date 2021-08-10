import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Avatar from '../Equipment/Avatar'
import Creature from '../Equipment/Creature'
import Magic from '../Equipment/Magic'
import Talisman from '../Equipment/Talisman'

const Equipment = () => {
    return( 
        <>
            <Router>
                <div className = 'equipment-box'>
                    <ul className = 'equipment-menu-navigation'>
                        <li className = 'equipment-menu'><Link to = '/setting/equipment/magic'>장비마부</Link></li>
                        <li className = 'equipment-menu'><Link to = '/setting/equipment/avatar'>아바타</Link></li>
                        <li className = 'equipment-menu'><Link to = '/setting/equipment/creature'>크리쳐</Link></li>
                        <li className = 'equipment-menu'><Link to = '/setting/equipment/talisman'>탈리스만</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path = '/setting/equipment/magic' component = {Magic} />
                    <Route path = '/setting/equipment/avatar' component = {Avatar} />
                    <Route path = '/setting/equipment/creature' component = {Creature} />
                    <Route path = '/setting/equipment/talisman' component = {Talisman} />
                </Switch>
            </Router>
        </>
    )
}

export default Equipment