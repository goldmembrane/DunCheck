import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingAvatarCut } from '../../action/AvatarAction'

const Avatar = (props) => {

    const [avatarCheck, setAvatarCheck] = useState(false)

    const dispatch = useDispatch()

    const onAvatarCheckHandler = () => {
        setAvatarCheck(!avatarCheck)
    }

    const onSubmitAvatarCheckHandler = (e) => {
        e.preventDefault()
        let avatar = {
            avatar: avatarCheck
        }
        dispatch(settingAvatarCut(avatar))
    }

    return (
        <>
            <div className = 'avatar-cut-box'>
                <div className = 'avatar-cut-title'>아바타 컷 설정</div>
                <form
                    onSubmit = {onSubmitAvatarCheckHandler}>
                    <span>딜 플티 체크 여부 : </span>
                    <input type = 'checkbox'id = 'avatar-check' checked = {avatarCheck} onChange = {onAvatarCheckHandler}/>
                    <button type = 'submit' onClick = {() => props.history.push('/setting/equipment/creature')}>확인</button>
                </form>
            </div>
        </>
    )
}

export default Avatar