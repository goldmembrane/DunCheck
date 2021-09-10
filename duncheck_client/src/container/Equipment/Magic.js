import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

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

let MagicCutBox = styled.div`
                    height: 800px;
                    background-color: #f9d423;`

let MagicCutTitle = styled.div`
                    width: 300px;
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                    margin: 0px auto;
                    font-size: 24px;
                    font-weight: bold;
                    color: #00f;`

let MagicCutList = styled.div`
                    width: 900px;
                    height: 690px;
                    margin: 20px auto;
                    background-color: #24d292;`

let MagicCut = styled.div`
                    width: 800px;
                    height: 45px;
                    margin: 0 auto;
                    background-color: #f3e7e9;
                    margin-top: 10px;
                    display: flex;
                    align-items: center;`

let MagicCutLabel = styled.div`
                    width: 100px;
                    text-align: center;
                    font-size: 18px;`

let MagicCutModalButton = styled.button`
                    width: 100%;
                    height: 45px;
                    border: none;
                    background-color: #616161;
                    font-size: 26px;
                    cursor: pointer;`

let NextAvatarButtonBox = styled.div`
                    width: 100px;
                    height: 30px;
                    margin: 0 auto;
                    margin-bottom: 20px;`

let NextAvatarButton = styled.button`
                    width: 100px;
                    height: 25px;
                    border: none;
                    background-color: #fff;
                    cursor: pointer;`


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
            <MagicCutBox>
                <MagicCutTitle>장비 마부 컷 설정</MagicCutTitle>
                    <MagicCutList>
                        <MagicCut>
                            <MagicCutLabel>칭호 :</MagicCutLabel>
                            <MagicCutModalButton onClick = {openStyleModal}>{localStorage.getItem('style') !== false ? localStorage.getItem('style') : style}</MagicCutModalButton>
                            <StyleModal open = {openStyle} close = {closeStyleModal}/>
                        </MagicCut>
                        <MagicCut>
                            <MagicCutLabel>무기 :</MagicCutLabel>
                            <MagicCutModalButton onClick = {openWeaponModal}>{localStorage.getItem('weapon') !== false ? localStorage.getItem('weapon') : weapon}</MagicCutModalButton>
                            <WeaponModal open = {openWeapon} close = {closeWeaponModal}/>
                        </MagicCut>
                        <MagicCut>
                            <MagicCutLabel>상의 :</MagicCutLabel>
                            <MagicCutModalButton onClick = {openShirtModal}>{localStorage.getItem('shirt') !== false ? localStorage.getItem('shirt') : shirt}</MagicCutModalButton>
                            <ShirtModal open = {openShirt} close = {closeShirtModal}/>
                        </MagicCut>
                        <MagicCut>
                            <MagicCutLabel>하의 :</MagicCutLabel>
                           <MagicCutModalButton onClick = {openPantsModal}>{localStorage.getItem('pants') !== false ? localStorage.getItem('pants') : pants}</MagicCutModalButton>
                           <PantsModal open = {openPants} close = {closePantsModal}/>
                        </MagicCut>
                        <MagicCut>
                            <MagicCutLabel>어깨 :</MagicCutLabel>
                            <MagicCutModalButton onClick = {openShoulderModal}>{localStorage.getItem('shoulder') !== false ? localStorage.getItem('shoulder') : shoulder}</MagicCutModalButton>
                            <ShoulderModal open = {openShoulder} close = {closeShoulderModal}/>
                        </MagicCut>
                        <MagicCut>
                            <MagicCutLabel>신발 :</MagicCutLabel>
                            <MagicCutModalButton onClick = {openShoesModal}>{localStorage.getItem('shoes') !== false ? localStorage.getItem('shoes') : shoes}</MagicCutModalButton>
                            <ShoesModal open = {openShoes} close = {closeShoesModal}/>
                        </MagicCut>
                        <MagicCut>
                            <MagicCutLabel>팔찌 :</MagicCutLabel>
                            <MagicCutModalButton onClick = {openArmletModal}>{localStorage.getItem('armlet') !== false ? localStorage.getItem('armlet') : armlet}</MagicCutModalButton>
                            <ArmletModal open = {openArmlet} close = {closeArmletModal} />
                        </MagicCut>
                        <MagicCut>
                            <MagicCutLabel>목걸이 :</MagicCutLabel>
                            <MagicCutModalButton onClick = {openNecklaceModal}>{localStorage.getItem('necklace') !== false ? localStorage.getItem('necklace') : necklace}</MagicCutModalButton>
                            <NecklaceModal open = {openNecklace} close = {closeNecklaceModal}/>
                        </MagicCut>
                        <MagicCut>
                            <MagicCutLabel>반지 :</MagicCutLabel>
                            <MagicCutModalButton onClick = {openRingModal}>{localStorage.getItem('ring') !== false ? localStorage.getItem('ring') : ring}</MagicCutModalButton>
                            <RingModal open = {openRing} close = {closeRingModal}/>
                        </MagicCut>
                        <MagicCut>
                            <MagicCutLabel>보조장비 :</MagicCutLabel>
                            <MagicCutModalButton onClick = {openAuxiliaryModal}>{localStorage.getItem('auxiliary') !== false ? localStorage.getItem('auxiliary') : auxiliary}</MagicCutModalButton>
                            <AuxiliaryModal open = {openAuxiliary} close = {closeAuxiliaryModal}/>
                        </MagicCut>
                        <MagicCut>
                            <MagicCutLabel>마법석 :</MagicCutLabel>
                            <MagicCutModalButton onClick = {openMagicstoneModal}>{localStorage.getItem('magicstone') !== false ? localStorage.getItem('magicstone') : magicstone}</MagicCutModalButton>
                            <MagicstoneModal open = {openMagicstone} close = {closeMagicstoneModal}/>
                        </MagicCut>
                        <MagicCut>
                            <MagicCutLabel>귀걸이 :</MagicCutLabel>
                            <MagicCutModalButton onClick = {openEarlingModal}>{localStorage.getItem('earling') !== false ? localStorage.getItem('ealing') : earling}</MagicCutModalButton>
                            <EarlingModal open = {openEarling} close = {closeEarlingModal}/>
                        </MagicCut>
                        <div className = 'full-critical-check-box'>
                            <span>만크 여부 : </span>
                            <input type = 'checkbox' className = 'full-critical-check' onChange = {onCheckFullCriticalHandler}/>
                        </div>
                    </MagicCutList>
                    <NextAvatarButtonBox>
                        <NextAvatarButton type = 'submit' onClick = {() => props.history.push('/setting/equipment/avatar')}>다음</NextAvatarButton>
                    </NextAvatarButtonBox>
            </MagicCutBox>
        </>
    )
}

export default Magic