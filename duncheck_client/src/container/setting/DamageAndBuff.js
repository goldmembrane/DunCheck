import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import DamageAndBuffModal from "../../modal/DamageAndBuffModal";

let DamageAndBuffContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: #a8bfff;
`;

let DamageAndBuffCutBox = styled.div`
  display: flex;
  justify-content: center;
`;

let DamageAndBuffCutButton = styled.button`
  padding-left: 100px;
  padding-right: 100px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
`;

let ShowDamageAndBuffCutContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: cetner;
  align-items: center;
`;

let ShowScoreCutBox = styled.div`
  padding: 50px 80px;
  background-color: #50a7c2;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

let ScoreCutLabel = styled.div`
  font-size: 17px;
  font-weight: bold;
  width: 100px;
  margin: 0 auto;
`;

let ScoreCutValue = styled.div`
  width: 50px;
  font-size: 17px;
  font-weight: bold;
`;

const DamageAndBuff = () => {
  const [openDamageAndBuff, setOpenDamageAndBuff] = useState(false);

  const pureDamage = useSelector((state) => state.DamageReducer.pureDamage);
  const synergyDamage = useSelector(
    (state) => state.DamageReducer.synergyDamage
  );
  const buffScore = useSelector((state) => state.BuffReducer.buffScore);

  const openDamageAndBuffModal = () => {
    setOpenDamageAndBuff(true);
  };

  const closeDamageAndBuffModal = () => {
    setOpenDamageAndBuff(false);
  };

  return (
    <>
      <DamageAndBuffContainer>
        <DamageAndBuffCutBox>
          <DamageAndBuffCutButton onClick={openDamageAndBuffModal}>
            딜표 &#38; 버프력 컷 설정
          </DamageAndBuffCutButton>
          <DamageAndBuffModal
            open={openDamageAndBuff}
            close={closeDamageAndBuffModal}
          />
        </DamageAndBuffCutBox>
        <ShowDamageAndBuffCutContainer>
          <ShowScoreCutBox>
            <ScoreCutLabel>퓨딜 컷 : </ScoreCutLabel>
            <ScoreCutValue>{pureDamage}억</ScoreCutValue>
          </ShowScoreCutBox>
          <ShowScoreCutBox>
            <ScoreCutLabel>시너지 컷 : </ScoreCutLabel>
            <ScoreCutValue>{synergyDamage}억</ScoreCutValue>
          </ShowScoreCutBox>
          <ShowScoreCutBox>
            <ScoreCutLabel>버프력 컷 : </ScoreCutLabel>
            <ScoreCutValue>{buffScore}만</ScoreCutValue>
          </ShowScoreCutBox>
        </ShowDamageAndBuffCutContainer>
      </DamageAndBuffContainer>
    </>
  );
};

export default DamageAndBuff;
