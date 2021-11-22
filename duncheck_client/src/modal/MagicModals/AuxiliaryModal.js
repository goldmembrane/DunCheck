import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { settingAuxiliaryCut } from "../../action/MagicAction";
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

let MagicCutBox = styled.div`
  width: 90%;
  max-width: 450px;
  height: 400px;
  margin: 0 auto;
  border-radius: 3px;
  background-color: #fff;
  overflow: hidden;
`;

let MagicInput = styled.div`
  width: 80%;
  max-width: 250px;
  height: 100px;
  margin: 125px auto;
`;

let MagicCutLabel = styled.p`
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
`;

let MagicCutValue = styled.input`
  width: 180px;
  height: 30px;
  text-align: center;
  margin-left: 20px;
`;

let SettingMagicButton = styled.button`
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

const AuxiliaryModal = (props) => {
  const dispatch = useDispatch();

  const { open, close } = props;

  const [auxiliary, setAuxiliary] = useState(0);

  const onHandlerAuxiliary = (e) => {
    setAuxiliary(e.target.value);
  };

  const onSubmitAuxiliary = () => {
    let auxiliaryCut = {
      auxiliary: auxiliary,
    };

    dispatch(settingAuxiliaryCut(auxiliaryCut));
  };

  return open ? (
    <OpenModalBox>
      <MagicCutBox>
        <MagicInput>
          <MagicCutLabel>보조장비 : </MagicCutLabel>
          <MagicCutValue
            type="number"
            onChange={onHandlerAuxiliary}
            value={auxiliary}
          />
          <SettingMagicButton
            className="settingAuxiliary"
            onClick={() => {
              onSubmitAuxiliary();
              close();
            }}
          >
            닫기
          </SettingMagicButton>
        </MagicInput>
      </MagicCutBox>
    </OpenModalBox>
  ) : (
    <ModalBox></ModalBox>
  );
};

export default AuxiliaryModal;
