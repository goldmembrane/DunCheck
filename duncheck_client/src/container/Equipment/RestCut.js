import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import RestCutModal from "../../modal/RestCutModal";

let SettingRestContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: #b224ef;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

let SettingRestCutBox = styled.div`
  display: flex;
  justify-content: center;
`;

let SettingRestCutButton = styled.button`
  padding: 10px 200px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
  color: #00f;
`;

let ShowRestCutContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

let ShowCutBox = styled.div`
  width: 30%;
  background-color: #b7f8db;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

let CutTitle = styled.div`
  width: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  margin: 0 auto;
  text-align: center;
`;

let CutLabel = styled.div`
  font-size: 17px;
  font-weight: bold;
  width: 200px;
  margin: 0 auto;
`;

let CutValue = styled.div`
  width: 30px;
  font-size: 17px;
  font-weight: bold;
`;

const RestCut = () => {
  const [openRest, setOpenRest] = useState(false);

  const creature = useSelector((state) => state.CreatureReducer.creature);

  const openRestModal = () => {
    setOpenRest(true);
  };

  const closeRestModal = () => {
    setOpenRest(false);
  };

  return (
    <SettingRestContainer>
      <SettingRestCutBox>
        <SettingRestCutButton onClick={openRestModal}>
          나머지 컷 설정
        </SettingRestCutButton>
        <RestCutModal open={openRest} close={closeRestModal} />
      </SettingRestCutBox>
      <ShowRestCutContainer>
        <ShowCutBox>
          <CutTitle>아바타 컷</CutTitle>
          <CutLabel>딜 플티 체크 여부 : </CutLabel>
          <CutValue>
            {localStorage.getItem("avatar") === "true" ? `O` : `X`}
          </CutValue>
        </ShowCutBox>
        <ShowCutBox>
          <CutTitle>크리쳐 컷</CutTitle>
          <CutLabel>선택된 크리쳐 수치 : </CutLabel>
          <CutValue>{creature}%</CutValue>
        </ShowCutBox>
        <ShowCutBox>
          <CutTitle>탈리스만 컷</CutTitle>
          <CutLabel>올 카펠라 체크 여부 : </CutLabel>
          <CutValue>
            {localStorage.getItem("talisman") === "true" ? `O` : `X`}
          </CutValue>
        </ShowCutBox>
      </ShowRestCutContainer>
    </SettingRestContainer>
  );
};

export default RestCut;
