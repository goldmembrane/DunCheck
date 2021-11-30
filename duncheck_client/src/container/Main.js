import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import * as api from "../module/api";

let MainHeader = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #fbc2eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

let LogoBox = styled.div`
  padding: 10px 20px 10px 20px;
  margin-left: 20px;
  text-align: center;
  cursor: pointer;
`;

let TitleBox = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
  font-size: 28px;
  font-weight: bold;
`;

let EmptyBox = styled.div`
  width: 100px;
`;

let MenuNavigation = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #8fd3f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

let Login = styled.div`
  padding: 5px 20px;
  margin-right: 10px;
  cursor: pointer;
`;

let SettingButton = styled.button`
  padding-left: 200px;
  padding-right: 200px;
  font-size: 22px;
  font-weight: bold;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

let SearchBarContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 400px;
  background-color: #330867;
`;

let SearchBarBox = styled.div`
  display: flex;
  justify-content: center;
`;

let SearchBar = styled.input`
  padding-left: 10px;
  padding-right: 150px;
  font-size: 30px;
`;

let SearchButton = styled.button`
  padding-left: 30px;
  padding-right: 30px;
  margin-left: 5px;
  font-size: 28px;
  font-weight: bold;
  background-color: #89f7fe;
  border: none;
  cursor: pointer;
`;

let FooterBox = styled.div`
  padding-bottom: 20px;
`;

let Api = styled.div`
  padding-bottom: 50px;
  padding-top: 50px;
  background-color: #fa71cd;
  display: flex;
  padding-left: 20px;
`;

let NoticeBoard = styled.div`
  padding-bottom: 300px;
  background-color: #48c6ef;
  text-align: center;
`;

const Main = (props) => {
  const [userId, setUserId] = useState("");

  const userNameHandler = (e) => {
    setUserId(e.target.value);
  };

  const getUserInfo = async (id) => {
    let userName = encodeURIComponent(id);

    await axios
      .get(
        `https://api.neople.co.kr/df/servers/all/characters?characterName=${userName}&apikey=${api.key}`
      )
      .then((response) => {
        let settedId = response.data.rows
          .flatMap((id) => id.characterId)
          .join("");

        let serverId = response.data.rows.flatMap((id) => id.serverId).join("");

        axios
          .get(
            `https://api.neople.co.kr/df/servers/${serverId}/characters/${settedId}?apikey=${api.key}`
          )
          .then((data) => {
            console.log(data);
          });
      });
  };
  return (
    <>
      <MainHeader>
        <LogoBox>
          <h2>logo</h2>
        </LogoBox>
        <TitleBox>DunCheck</TitleBox>
        <EmptyBox></EmptyBox>
      </MainHeader>
      <MenuNavigation>
        <EmptyBox></EmptyBox>
        <SettingButton
          onClick={() => {
            props.history.push("/setting");
          }}
        >
          설정
        </SettingButton>
        <Login>로그인</Login>
      </MenuNavigation>
      <SearchBarContainer>
        <SearchBarBox>
          <SearchBar
            type="text"
            className="search-bar"
            onChange={userNameHandler}
          />
          <SearchButton
            onClick={() => {
              getUserInfo(userId);
            }}
          >
            검색
          </SearchButton>
        </SearchBarBox>
      </SearchBarContainer>
      <FooterBox>
        <NoticeBoard>notice board</NoticeBoard>
        <Api>copyright by Neople</Api>
      </FooterBox>
    </>
  );
};

export default Main;
