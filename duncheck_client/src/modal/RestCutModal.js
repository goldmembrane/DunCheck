import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { settingAvatarCut } from "../action/AvatarAction";
import { settingCreatureCut } from "../action/CreatureAction";
import { settingTalismanCut } from "../action/TalismanAction";

let ModalBox = styled.div`
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;

let OpenModalBox = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;

let RestCutCheckBox = styled.div`
  width: 90%;
  max-width: 450px;
  height: 450px;
  margin: 0 auto;
  border-radius: 3px;
  background-color: #fff;
  overflow: hidden;
`;

let RestCutCheck = styled.div`
  width: 80%;
  max-width: 300px;
  height: 200px;
  margin: 125px auto;
`;

let CutCheck = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

let CutCheckLable = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

let CheckBoxCutValue = styled.input`
  width: 30px;
  height: 30px;
  margin-left: 50px;
`;

let NumberInputCutValue = styled.input`
  width: 120px;
  height: 30px;
  margin-left: 10px;
  text-align: center;
`;

let SettingRestCut = styled.button`
  display: block;
  width: 50px;
  height: 25px;
  line-height: 25px;
  border: none;
  background-color: #00f;
  color: #fff;
  font-size: 20px;
  border-radius: 3px;
  margin: 100px auto;
`;

const AvatarModal = (props) => {
  const dispatch = useDispatch();

  const { open, close } = props;

  const [avatar, setAvatar] = useState(false);
  const [creature, setCreature] = useState(0);
  const [talisman, setTalisman] = useState(false);

  const onHandlerAvatar = (e) => {
    setAvatar(e.target.checked);
    localStorage.setItem("avatar", e.target.checked);
  };

  const onHandlerCreature = (e) => {
    setCreature(e.target.value);
  };

  const onHandlerTalisman = (e) => {
    setTalisman(e.target.checked);
    localStorage.setItem("talisman", e.target.checked);
  };

  const onSubmitRestCut = () => {
    let avatarCut = {
      avatar: avatar,
    };

    let creatureCut = {
      creature: creature,
    };

    let talismanCut = {
      talisman: talisman,
    };

    dispatch(settingAvatarCut(avatarCut));
    dispatch(settingCreatureCut(creatureCut));
    dispatch(settingTalismanCut(talismanCut));

    localStorage.setItem("creature", creature);
  };
  return open ? (
    <OpenModalBox>
      <RestCutCheckBox>
        <RestCutCheck>
          <CutCheck>
            <CutCheckLable>딜 플티 체크 여부 : </CutCheckLable>
            <CheckBoxCutValue
              type="checkbox"
              onChange={onHandlerAvatar}
              defaultChecked={JSON.parse(localStorage.getItem("avatar"))}
            />
          </CutCheck>
          <CutCheck>
            <CutCheckLable>선택된 크리쳐 수치 : </CutCheckLable>
            <NumberInputCutValue
              type="number"
              onChange={onHandlerCreature}
              value={creature}
            />
            <span>%</span>
          </CutCheck>
          <CutCheck>
            <CutCheckLable>올 카펠라 체크 여부 : </CutCheckLable>
            <CheckBoxCutValue
              type="checkbox"
              onChange={onHandlerTalisman}
              defaultChecked={JSON.parse(localStorage.getItem("talisman"))}
            />
          </CutCheck>
          <SettingRestCut
            onClick={() => {
              onSubmitRestCut();
              close();
            }}
          >
            닫기
          </SettingRestCut>
        </RestCutCheck>
      </RestCutCheckBox>
    </OpenModalBox>
  ) : (
    <ModalBox></ModalBox>
  );
};

export default AvatarModal;
