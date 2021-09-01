import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import ArmletModal from '../../modal/MagicModals/ArmletModal'
import AuxiliaryModal from '../../modal/MagicModals/AuxiliaryModal'
import EarlingModal from '../../modal/MagicModals/EarlingModal'
import MagicstoneModal from '../../modal/MagicModals/MagicstoneModal'
import NecklaceModal from '../../modal/MagicModals/NecklaceModal'
import PantsModal from '../../modal/MagicModals/PantsModal'
import RingModal from '../../modal/MagicModals/RingModal'
import ShirtModal from '../../modal/MagicModals/ShirtModal'
import ShoesModal from '../../modal/MagicModals/ShoesModal'
import ShoulderModal from '../../modal/MagicModals/ShoulderModal'
import StyleModal from '../../modal/MagicModals/StyleModal'
import WeaponModal from '../../modal/MagicModals/WeaponModal'

const Magic = (props) => {

    const [openStyle, setOpenStyle] = useState(false)
    const [openWeapon, setOpenWeapon] = useState(false)
    const [openShirt, setOpenShirt] = useState(false)
    const [openPants, setOpenPants] = useState(false)
    const [openShoulder, setOpenShoulder] = useState(false)
    const [openShoes, setOpenShoes] = useState(false)
    const [openArmlet, setOpenArmlet] = useState(false)
    const [openNecklace, setOpenNecklace] = useState(0)
    const [openRing, setOpenRing] = useState(false)
    const [openAuxiliary, setOpenAuxiliary] = useState(false)
    const [openMagicstone, setOpenMagicstone] = useState(false)
    const [openEarling, setOpenEarling] = useState(false)
    const [fullCritical, setFullCritical] = useState(false)
    
    const style = useSelector(state => state.MagicReducer.style)
    const weapon = useSelector(state => state.MagicReducer.weapon)
    const shirt = useSelector(state => state.MagicReducer.shirt)
    const pants = useSelector(state => state.MagicReducer.pants)
    const shoulder = useSelector(state => state.MagicReducer.shoulder)
    const shoes = useSelector(state => state.MagicReducer.shoes)
    const armlet = useSelector(state => state.MagicReducer.armlet)
    const necklace = useSelector(state => state.MagicReducer.necklace)
    const ring = useSelector(state => state.MagicReducer.ring)
    const auxiliary = useSelector(state => state.MagicReducer.auxiliary)
    const magicstone = useSelector(state => state.MagicReducer.magicstone)
    const earling = useSelector(state => state.MagicReducer.earling)


    const openStyleModal = () => {
        setOpenStyle(true)
    }

    const closeStyleModal = () => {
        setOpenStyle(false)
    }

    const openWeaponModal = () => {
        setOpenWeapon(true)
    }

    const closeWeaponModal = () => {
        setOpenWeapon(false)
    }

    const openShirtModal = () => {
        setOpenShirt(true)
    }

    const closeShirtModal = () => {
        setOpenShirt(false)
    }

    const openPantsModal = () => {
        setOpenPants(true)
    }

    const closePantsModal = () => {
        setOpenPants(false)
    }

    const openShoulderModal = () => {
        setOpenShoulder(true)
    }

    const closeShoulderModal = () => {
        setOpenShoulder(false)
    }

    const openShoesModal = () => {
        setOpenShoes(true)
    }

    const closeShoesModal = () => {
        setOpenShoes(false)
    }

    const openArmletModal = () => {
        setOpenArmlet(true)
    }

    const closeArmletModal = () => {
        setOpenArmlet(false)
    }

    const openNecklaceModal = () => {
        setOpenNecklace(true)
    }

    const closeNecklaceModal = () => {
        setOpenNecklace(false)
    }

    const openRingModal = () => {
        setOpenRing(true)
    }

    const closeRingModal = () => {
        setOpenRing(false)
    }

    const openAuxiliaryModal = () => {
        setOpenAuxiliary(true)
    }

    const closeAuxiliaryModal = () => {
        setOpenAuxiliary(false)
    }

    const openMagicstoneModal = () => {
        setOpenMagicstone(true)
    }

    const closeMagicstoneModal = () => {
        setOpenMagicstone(false)
    }

    const openEarlingModal = () => {
        setOpenEarling(true)
    }

    const closeEarlingModal = () => {
        setOpenEarling(false)
    }

    const onCheckFullCriticalHandler = () => {
        setFullCritical(!fullCritical)
    }
    return (
        <>
            <div className = 'magic-cut-box'>
                <div className = 'magic-cut-title'>장비 마부 컷 설정</div>
                    <div className = 'magic-cut-container'>
                        <div className = 'style-cut'>
                            <button onClick = {openStyleModal}>칭호 : {style}</button>
                            <StyleModal open = {openStyle} close = {closeStyleModal}/>
                        </div>
                        <div className = 'weapon-magic'>
                            <button onClick = {openWeaponModal}>무기 : {weapon}</button>
                            <WeaponModal open = {openWeapon} close = {closeWeaponModal}/>
                        </div>
                        <div className = 'shirt-magic'>
                            <button onClick = {openShirtModal}>상의 : {shirt}</button>
                            <ShirtModal open = {openShirt} close = {closeShirtModal}/>
                        </div>
                        <div className = 'pants-magic'>
                           <button onClick = {openPantsModal}>하의 : {pants}</button>
                           <PantsModal open = {openPants} close = {closePantsModal}/>
                        </div>
                        <div className = 'shoulder-magic'>
                            <button onClick = {openShoulderModal}>어깨 : {shoulder}</button>
                            <ShoulderModal open = {openShoulder} close = {closeShoulderModal}/>
                        </div>
                        <div className = 'shoes-magic'>
                            <button onClick = {openShoesModal}>신발 : {shoes}</button>
                            <ShoesModal open = {openShoes} close = {closeShoesModal}/>
                        </div>
                        <div className = 'armlet-magic'>
                            <button onClick = {openArmletModal}>팔찌 : {armlet}</button>
                            <ArmletModal open = {openArmlet} close = {closeArmletModal} />
                        </div>
                        <div className = 'necklace-magic'>
                            <button onClick = {openNecklaceModal}>목걸이 : {necklace}</button>
                            <NecklaceModal open = {openNecklace} close = {closeNecklaceModal}/>
                        </div>
                        <div className = 'ring-magic'>
                            <button onClick = {openRingModal}>반지 : {ring}</button>
                            <RingModal open = {openRing} close = {closeRingModal}/>
                        </div>
                        <div className = 'auxiliary-magic'>
                            <button onClick = {openAuxiliaryModal}>보조장비 : {auxiliary}</button>
                            <AuxiliaryModal open = {openAuxiliary} close = {closeAuxiliaryModal}/>
                        </div>
                        <div className = 'magicstone-magic'>
                           <button onClick = {openMagicstoneModal}>마법석 : {magicstone}</button>
                           <MagicstoneModal open = {openMagicstone} close = {closeMagicstoneModal}/>
                        </div>
                        <div className = 'earling-magic'>
                           <button onClick = {openEarlingModal}>귀걸이 : {earling}</button>
                           <EarlingModal open = {openEarling} close = {closeEarlingModal}/>
                        </div>
                        <div className = 'full-critical-check-box'>
                            <span>만크 여부 : </span>
                            <input type = 'checkbox' className = 'full-critical-check' onChange = {onCheckFullCriticalHandler}/>
                        </div>
                    </div>
                    <button type = 'submit' onClick = {() => props.history.push('/setting/equipment/avatar')}>확인</button>
            </div>
        </>
    )
}

export default Magic