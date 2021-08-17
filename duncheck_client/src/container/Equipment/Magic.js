import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingWeaponCut, settingShirtCut, settingPantsCut, settingShoulderCut, settingShoesCut, settingArmletCut, settingNecklaceCut, settingRingCut, settingAuxiliaryCut, settingMagicstoneCut, settingEarlingCut, settingFullCriticalCut } from '../../action/MagicAction'

const Magic = () => {

    const dispatch = useDispatch()

    const [weapon, setWeapon] = useState(0)
    const [shirt, setShirt] = useState(0)
    const [pants, setPants] = useState(0)
    const [shoulder, setShoulder] = useState(0)
    const [shoes, setShoes] = useState(0)
    const [armlet, setArmlet] = useState(0)
    const [necklace, setNecklace] = useState(0)
    const [ring, setRing] = useState(0)
    const [auxiliary, setAuxiliary] = useState(0)
    const [magicstone, setMagicstone] = useState(0)
    const [earling, setEarling] = useState(0)
    const [fullCritical, setFullCritical] = useState(false)

    const onWeaponHandler = (e) => {
        setWeapon(e.currentTarget.value)
    }

    const onShirtHandler = (e) => {
        setShirt(e.currentTarget.value)
    }

    const onPantsHandler = (e) => {
        setPants(e.currentTarget.value)
    }

    const onShoulderHandler = (e) => {
        setShoulder(e.currentTarget.value)
    }

    const onShoesHandler = (e) => {
        setShoes(e.currentTarget.value)
    }

    const onArmletHandler = (e) => {
        setArmlet(e.currentTarget.value)
    }

    const onNecklaceHandler = (e) => {
        setNecklace(e.currentTarget.value)
    }

    const onRingHandler = (e) => {
        setRing(e.currentTarget.value)
    }

    const onAuxiliaryHandler = (e) => {
        setAuxiliary(e.currentTarget.value)
    }

    const onMagicstoneHandler = (e) => {
        setMagicstone(e.currentTarget.value)
    }

    const onEarlingHandler = (e) => {
        setEarling(e.currentTarget.value)
    }

    const onCheckFullCriticalHandler = () => {
        setFullCritical(!fullCritical)
    }

    const onSubmitMagicHandler = (e) => {
        e.preventDefault()
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
                    <button type = 'submit'>설정</button>
                </form>
            </div>
        </>
    )
}

export default Magic