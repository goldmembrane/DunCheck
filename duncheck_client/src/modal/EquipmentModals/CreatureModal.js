import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingCreatureCut } from '../../action/CreatureAction'

const CreatureModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [creature, setCreature] = useState(0)

    const onHandlerCreature = (e) => {
        setCreature(e.target.value)
    }

    const onSubmitCreature = () => {
        let creatureCut = {
            creature: creature
        }

        dispatch(settingCreatureCut(creatureCut))
    }

    return (
        <div className = {open ? 'openCreatureModal creatureModal' : 'creatureModal'}>
            {open ? (
                <div className = 'creatureInputBox'>
                    <div className = 'creatureInput'>
                        <span>크리쳐 : </span>
                        <input type = 'number' onChange = {onHandlerCreature} />
                        <span>%</span>
                        <button className = 'settingCreature' onClick = {() => {onSubmitCreature(); close();}}>댣기</button>    
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default CreatureModal