import React from "react";
import styled from "styled-components";

const CharacterNameBox = styled.div`
  padding: 50px 30px;
`;

const CharacterComponent = ({ equip }) => {
  console.log(equip);

  return (
    <>
      <div>
        <CharacterNameBox>{equip.data.characterName}</CharacterNameBox>
      </div>
    </>
  );
};

export default CharacterComponent;
