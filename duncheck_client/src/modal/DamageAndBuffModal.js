import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  settingPureDamageCut,
  settingSynergyDamageCut,
} from "../action/DamageAction";
import { settingBuffScoreCut } from "../action/BuffAction";
import styled from "styled-components";

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

let DamageAndBuffInputBox = styled.div`
  width: 90%;
  max-width: 450px;
  height: 450px;
  margin: 0 auto;
  border-radius: 3px;
  background-color: #fff;
  overflow: hidden;
`;

let DamageInput = styled.div`
  width: 80%;
  max-width: 300px;
  height: 30px;
  padding-top: 50px;
  margin: 0 auto;
`;

let DamageAndBuffCutLabel = styled.p`
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
`;

let DamageAndBuffCutValue = styled.input`
  width: 150px;
  height: 30px;
  text-align: center;
  margin-left: 20px;
`;

let SettingDamageAndBuffCutButton = styled.button`
  display: block;
  width: 50px;
  height: 25px;
  line-height: 25px;
  border: none;
  background-color: #00f;
  color: #fff;
  font-size: 20px;
  border-radius: 3px;
  margin: 75px auto;
`;

const DamageModal = (props) => {
  const dispatch = useDispatch();

  const { open, close } = props;

  const [pureDamage, setPureDamage] = useState(0);
  const [synergyDamage, setSynergyDamage] = useState(0);
  const [buffScore, setBuffScore] = useState(0);

  const onHandlerPureDamage = (e) => {
    setPureDamage(e.target.value);
  };

  const onHandlerSynergyDamage = (e) => {
    setSynergyDamage(e.target.value);
  };

  const onHandlerBuffScore = (e) => {
    setBuffScore(e.target.value);
  };

  const onSubmitDamageAndBuff = () => {
    let pureDamageCut = {
      pureDamage: pureDamage,
    };

    let synergyDamageCut = {
      synergyDamage: synergyDamage,
    };

    let buffScoreCut = {
      buffScore: buffScore,
    };

    dispatch(settingPureDamageCut(pureDamageCut));
    dispatch(settingSynergyDamageCut(synergyDamageCut));
    dispatch(settingBuffScoreCut(buffScoreCut));
  };

  return open ? (
    <OpenModalBox>
      <DamageAndBuffInputBox>
        <DamageInput>
          <DamageAndBuffCutLabel>퓨딜 컷 : </DamageAndBuffCutLabel>
          <DamageAndBuffCutValue
            type="number"
            onChange={onHandlerPureDamage}
            value={pureDamage}
          />
          <span>억</span>
        </DamageInput>
        <DamageInput>
          <DamageAndBuffCutLabel>시너지 컷 : </DamageAndBuffCutLabel>
          <DamageAndBuffCutValue
            type="number"
            onChange={onHandlerSynergyDamage}
            value={synergyDamage}
          />
          <span>억</span>
        </DamageInput>
        <DamageInput>
          <DamageAndBuffCutLabel>버프력 컷 : </DamageAndBuffCutLabel>
          <DamageAndBuffCutValue
            type="number"
            onChange={onHandlerBuffScore}
            value={buffScore}
          />
          <span>만</span>
        </DamageInput>
        <SettingDamageAndBuffCutButton
          className="settingDamage"
          onClick={() => {
            onSubmitDamageAndBuff();
            close();
          }}
        >
          닫기
        </SettingDamageAndBuffCutButton>
      </DamageAndBuffInputBox>
    </OpenModalBox>
  ) : (
    <ModalBox></ModalBox>
  );
};

export default DamageModal;
