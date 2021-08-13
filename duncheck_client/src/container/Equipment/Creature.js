import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { useDispatch } from 'react-redux'
import { settingCreatureCut } from '../../action/CreatureAction'

const Creature = () => {

    const [creature, setCreature] = useState('')

    const dispatch = useDispatch()

    const onCreatureHandler = (e) => {
        setCreature(e)
    }

    const onSubmitCreatureHandler = (e) => {
        e.preventDefault()
        let creatureBody = {
            creature: creature
        }

        dispatch(settingCreatureCut(creatureBody))
    }
    return (
        <>
            <div className = 'creature-cut-box'>
                <div className = 'creature-title'>크리쳐 컷 설정</div>
                <form
                    onSubmit = {onSubmitCreatureHandler}>
                    <span>크리쳐 : </span>
                    <div className = 'creature-dropdown'>
                        <Dropdown
                            onSelect = {onCreatureHandler}>
                            <Dropdown.Toggle id = 'creature-dropdown'>
                                크리쳐를 선택하세요
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey = '10%'>10%</Dropdown.Item>
                                <Dropdown.Item eventKey = '15%'>15%</Dropdown.Item>
                                <Dropdown.Item eventKey = '18%'>18%</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <button className = 'creature-cut-setting'>설정</button>
                </form>
            </div>
        </>
    )
}

export default Creature