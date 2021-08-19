import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingWeaponCut, settingShirtCut, settingPantsCut, settingShoulderCut, settingShoesCut, settingArmletCut, settingNecklaceCut, settingRingCut, settingAuxiliaryCut, settingMagicstoneCut, settingEarlingCut, settingFullCriticalCut, settingStyleCut } from '../../action/MagicAction'

import ArmletModal from '../../modal/ArmletModal'
import AuxiliaryModal from '../../modal/AuxiliaryModal'
import EarlingModal from '../../modal/EarlingModal'
import MagicstoneModal from '../../modal/MagicstoneModal'
import NecklaceModal from '../../modal/NecklaceModal'
import PantsModal from '../../modal/PantsModal'
import RingModal from '../../modal/RingModal'
import ShirtModal from '../../modal/ShirtModal'
import ShoesModal from '../../modal/ShoesModal'
import ShoulderModal from '../../modal/ShoulderModal'
import StyleModal from '../../modal/StyleModal'
import WeaponModal from '../../modal/WeaponModal'

const Magic = (props) => {

    const dispatch = useDispatch()

    const [style, setStyle] = useState(0)
    const [openStyle, setOpenStyle] = useState(false)

    const [weapon, setWeapon] = useState(0)
    const [openWeapon, setOpenWeapon] = useState(false)

    const [shirt, setShirt] = useState(0)
    const [openShirt, setOpenShirt] = useState(false)

    const [pants, setPants] = useState(0)
    const [openPants, setOpenPants] = useState(false)

    const [shoulder, setShoulder] = useState(0)
    const [openShoulder, setOpenShoulder] = useState(false)

    const [shoes, setShoes] = useState(0)
    const [openShoes, setOpenShoes] = useState(false)

    const [armlet, setArmlet] = useState(0)
    const [openArmlet, setOpenArmlet] = useState(false)

    const [necklace, setNecklace] = useState(0)
    const [openNecklace, setOpenNecklace] = useState(0)

    const [ring, setRing] = useState(0)
    const [openRing, setOpenRing] = useState(false)

    const [auxiliary, setAuxiliary] = useState(0)
    const [openAuxiliary, setOpenAuxiliary] = useState(false)

    const [magicstone, setMagicstone] = useState(0)
    const [openMagicstone, setOpenMagicstone] = useState(false)

    const [earling, setEarling] = useState(0)
    const [openEarling, setOpenEarling] = useState(false)

    const [fullCritical, setFullCritical] = useState(false)

    const openStyleModal = () => {
        setOpenStyle(true)
    }

    const closeStyleModal = () => {
        setOpenStyle(false)
    }

    const onStyleHandler = (e) => {
        setStyle(e.currentTarget.value)
    }
    
    const openWeaponModal = () => {
        setOpenWeapon(true)
    }

    const closeWeaponModal = () => {
        setOpenWeapon(false)
    }

    const onWeaponHandler = (e) => {
        setWeapon(e.currentTarget.value)
    }

    const openShirtModal = () => {
        setOpenShirt(true)
    }

    const closeShirtModal = () => {
        setOpenShirt(false)
    }

    const onShirtHandler = (e) => {
        setShirt(e.currentTarget.value)
    }

    const openPantsModal = () => {
        setOpenPants(true)
    }

    const closePantsModal = () => {
        setOpenPants(false)
    }

    const onPantsHandler = (e) => {
        setPants(e.currentTarget.value)
    }

    const openShoulderModal = () => {
        setOpenShoulder(true)
    }

    const closeShoulderModal = () => {
        setOpenShoulder(false)
    }

    const onShoulderHandler = (e) => {
        setShoulder(e.currentTarget.value)
    }

    const openShoesModal = () => {
        setOpenShoes(true)
    }

    const closeShoesModal = () => {
        setOpenShoes(false)
    }

    const onShoesHandler = (e) => {
        setShoes(e.currentTarget.value)
    }

    const openArmletModal = () => {
        setOpenArmlet(true)
    }

    const closeArmletModal = () => {
        setOpenArmlet(false)
    }

    const onArmletHandler = (e) => {
        setArmlet(e.currentTarget.value)
    }

    const openNecklaceModal = () => {
        setOpenNecklace(true)
    }

    const closeNecklaceModal = () => {
        setOpenNecklace(false)
    }

    const onNecklaceHandler = (e) => {
        setNecklace(e.currentTarget.value)
    }

    const openRingModal = () => {
        setOpenRing(true)
    }

    const closeRingModal = () => {
        setOpenRing(false)
    }

    const onRingHandler = (e) => {
        setRing(e.currentTarget.value)
    }

    const openAuxiliaryModal = () => {
        setOpenAuxiliary(true)
    }

    const closeAuxiliaryModal = () => {
        setOpenAuxiliary(false)
    }

    const onAuxiliaryHandler = (e) => {
        setAuxiliary(e.currentTarget.value)
    }

    const openMagicstoneModal = () => {
        setOpenMagicstone(true)
    }

    const closeMagicstoneModal = () => {
        setOpenMagicstone(false)
    }

    const onMagicstoneHandler = (e) => {
        setMagicstone(e.currentTarget.value)
    }

    const openEarlingModal = () => {
        setOpenEarling(true)
    }

    const closeEarlingModal = () => {
        setOpenEarling(false)
    }

    const onEarlingHandler = (e) => {
        setEarling(e.currentTarget.value)
    }

    const onCheckFullCriticalHandler = () => {
        setFullCritical(!fullCritical)
    }

    const onSubmitMagicHandler = (e) => {
        e.preventDefault()

        let styleCut = {
            style : style
        }
        let weaponMagic = {
            weapon : weapon
        }
        let shirtMagic = {
            shirt: shirt
        }
        let pantsMagic = {
            pants: pants
        }
        let shoulderMagic = {
            shoulder: shoulder
        }
        let shoesMagic = {
            shoes: shoes
        }
        let armletMagic = {
            armlet: armlet
        }
        let necklaceMagic = {
            necklace: necklace
        }
        let ringMagic = {
            ring: ring
        }
        let auxiliaryMagic = {
            auxiliary: auxiliary
        }
        let magicstoneMagic = {
            magicstone: magicstone
        }
        let earlingMagic = {
            earling: earling
        }
        let fullCriticalCheck = {
            critical: fullCritical
        }

        dispatch(settingStyleCut(styleCut))
        dispatch(settingWeaponCut(weaponMagic))
        dispatch(settingShirtCut(shirtMagic))
        dispatch(settingPantsCut(pantsMagic))
        dispatch(settingShoulderCut(shoulderMagic))
        dispatch(settingShoesCut(shoesMagic))
        dispatch(settingArmletCut(armletMagic))
        dispatch(settingNecklaceCut(necklaceMagic))
        dispatch(settingRingCut(ringMagic))
        dispatch(settingAuxiliaryCut(auxiliaryMagic))
        dispatch(settingMagicstoneCut(magicstoneMagic))
        dispatch(settingEarlingCut(earlingMagic))
        dispatch(settingFullCriticalCut(fullCriticalCheck))
    }
    return (
        <>
            <div className = 'magic-cut-box'>
                <div className = 'magic-cut-title'>장비 마부 컷 설정</div>
                <form
                    onSubmit = {onSubmitMagicHandler}>
                    <div className = 'magic-cut-container'>
                        <div className = 'style-cut'>
                            <button onClick = {openStyleModal}>칭호 : {style}</button>
                            <StyleModal open = {openStyle} close = {closeStyleModal} handle = {onStyleHandler}/>
                        </div>
                        <div className = 'weapon-magic'>
                            <button onClick = {openWeaponModal}>무기 : {weapon}</button>
                            <WeaponModal open = {openWeapon} close = {closeWeaponModal} handle = {onWeaponHandler}/>
                        </div>
                        <div className = 'shirt-magic'>
                            <button onClick = {openShirtModal}>상의 : {shirt}</button>
                            <ShirtModal open = {openShirt} close = {closeShirtModal} handle = {onShirtHandler}/>
                        </div>
                        <div className = 'pants-magic'>
                           <button onClick = {openPantsModal}>하의 : {pants}</button>
                           <PantsModal open = {openPants} close = {closePantsModal} handle = {onPantsHandler}/>
                        </div>
                        <div className = 'shoulder-magic'>
                            <button onClick = {openShoulderModal}>어깨 : {shoulder}</button>
                            <ShoulderModal open = {openShoulder} close = {closeShoulderModal} handle = {onShoulderHandler}/>
                        </div>
                        <div className = 'shoes-magic'>
                            <button onClick = {openShoesModal}>신발 : {shoes}</button>
                            <ShoesModal open = {openShoes} close = {closeShoesModal} handle = {onShoesHandler}/>
                        </div>
                        <div className = 'armlet-magic'>
                            <button onClick = {openArmletModal}>팔찌 : {armlet}</button>
                            <ArmletModal open = {openArmlet} close = {closeArmletModal} handle = {onArmletHandler}/>
                        </div>
                        <div className = 'necklace-magic'>
                            <button onClick = {openNecklaceModal}>목걸이 : {necklace}</button>
                            <NecklaceModal open = {openNecklace} close = {closeNecklaceModal} handle = {onNecklaceHandler}/>
                        </div>
                        <div className = 'ring-magic'>
                            <button onClick = {openRingModal}>반지 : {ring}</button>
                            <RingModal open = {openRing} close = {closeRingModal} handle = {onRingHandler}/>
                        </div>
                        <div className = 'auxiliary-magic'>
                            <button onClick = {openAuxiliaryModal}>보조장비 : {auxiliary}</button>
                            <AuxiliaryModal open = {openAuxiliary} close = {closeAuxiliaryModal} handle = {onAuxiliaryHandler}/>
                        </div>
                        <div className = 'magicstone-magic'>
                           <button onClick = {openMagicstoneModal}>마법석 : {magicstone}</button>
                           <MagicstoneModal open = {openMagicstone} close = {closeMagicstoneModal} handle = {onMagicstoneHandler}/>
                        </div>
                        <div className = 'earling-magic'>
                           <button onClick = {openEarlingModal}>귀걸이 : {earling}</button>
                           <EarlingModal open = {openEarling} close = {closeEarlingModal} handle = {onEarlingHandler}/>
                        </div>
                        <div className = 'full-critical-check-box'>
                            <span>만크 여부 : </span>
                            <input type = 'checkbox' className = 'full-critical-check' onChange = {onCheckFullCriticalHandler}/>
                        </div>
                    </div>
                    <button type = 'submit' onClick = {() => props.history.push('/setting/equipment/avatar')}>확인</button>
                </form>
            </div>
        </>
    )
}

export default Magic