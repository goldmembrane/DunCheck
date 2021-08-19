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

    const onStyleHandler = (e) => {
        setStyle(e.currentTarget.value)
    }
    
    const openWeaponModal = () => {
        setOpenWeapon(true)
    }

    const onWeaponHandler = (e) => {
        setWeapon(e.currentTarget.value)
    }

    const openShirtModal = () => {
        setOpenShirt(true)
    }

    const onShirtHandler = (e) => {
        setShirt(e.currentTarget.value)
    }

    const openPantsModal = () => {
        setOpenPants(true)
    }

    const onPantsHandler = (e) => {
        setPants(e.currentTarget.value)
    }

    const openShoulderModal = () => {
        setOpenShoulder(true)
    }

    const onShoulderHandler = (e) => {
        setShoulder(e.currentTarget.value)
    }

    const openShoesModal = () => {
        setOpenShoes(true)
    }

    const onShoesHandler = (e) => {
        setShoes(e.currentTarget.value)
    }

    const openArmletModal = () => {
        setOpenArmlet(true)
    }

    const onArmletHandler = (e) => {
        setArmlet(e.currentTarget.value)
    }

    const openNecklaceModal = () => {
        setOpenNecklace(true)
    }

    const onNecklaceHandler = (e) => {
        setNecklace(e.currentTarget.value)
    }

    const openRingModal = () => {
        setOpenRing(true)
    }

    const onRingHandler = (e) => {
        setRing(e.currentTarget.value)
    }

    const openAuxiliaryModal = () => {
        setOpenAuxiliary(true)
    }

    const onAuxiliaryHandler = (e) => {
        setAuxiliary(e.currentTarget.value)
    }

    const openMagicstoneModal = () => {
        setOpenMagicstone(true)
    }

    const onMagicstoneHandler = (e) => {
        setMagicstone(e.currentTarget.value)
    }

    const openEarlingModal = () => {
        setOpenEarling(true)
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
                            <span>칭호 : </span>
                            <input type = 'number' className = 'style-cut' onChange = {onStyleHandler} />
                        </div>
                        <div className = 'weapon-magic'>
                            <span>무기 : </span>
                            <input type = 'number' className = 'weapon-magic-cut' onChange = {onWeaponHandler}/>
                        </div>
                        <div className = 'shirt-magic'>
                            <span>상의 : </span>
                            <input type = 'number' className = 'shirt-magic-cut' onChange = {onShirtHandler}/>
                        </div>
                        <div className = 'pants-magic'>
                            <span>하의 : </span>
                            <input type = 'number' className = 'pants-magic-cut' onChange = {onPantsHandler}/>
                        </div>
                        <div className = 'shoulder-magic'>
                            <span>어깨 : </span>
                            <input type = 'number' className = 'shoulder-magic-cut' onChange = {onShoulderHandler}/>
                        </div>
                        <div className = 'shoes-magic'>
                            <span>신발 : </span>
                            <input type = 'number' className = 'shoes-magic-cut' onChange = {onShoesHandler}/>
                        </div>
                        <div className = 'armlet-magic'>
                            <span>팔찌 : </span>
                            <input type = 'number' className = 'armlet-magic-cut' onChange = {onArmletHandler}/>
                        </div>
                        <div className = 'necklace-magic'>
                            <span>목걸이 : </span>
                            <input type = 'number' className = 'necklace-magic-cut' onChange = {onNecklaceHandler}/>
                        </div>
                        <div className = 'ring-magic'>
                            <span>반지 : </span>
                            <input type = 'number' className = 'ring-magic-cut' onChange = {onRingHandler}/>
                        </div>
                        <div className = 'auxiliary-magic'>
                            <span>보조장비 : </span>
                            <input type = 'number' className = 'auxiliary-magic-cut' onChange = {onAuxiliaryHandler}/>
                        </div>
                        <div className = 'magicstone-magic'>
                            <span>마법석 : </span>
                            <input type = 'number' className = 'magicstone-magic-cut' onChange = {onMagicstoneHandler}/>
                        </div>
                        <div className = 'earling-magic'>
                            <span>귀걸이 : </span>
                            <input type = 'number' className = 'earling-magic-cut' onChange = {onEarlingHandler}/>
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