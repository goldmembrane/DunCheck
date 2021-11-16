import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Equipment from "./setting/Equipment";
import DamageAndBuff from "./setting/DamageAndBuff";

let SettingCut = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #fff1eb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

let SettingNavigation = styled.ul`
  display: flex;
  justify-content: space-between;
`;

let SettingMenu = styled.li`
  padding-left: 60px;
  padding-right: 60px;
  background-color: #2575fc;
  margin-right: 40px;
  text-align: center;
  list-style: none;
  font-size: 32px;
`;

let FinishContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 150px;
  display: flex;
  justify-content: center;
`;

let FinishSettingButton = styled.button`
                padding-left: 50px;
                padding-right: 50px;
                font-size: 22px;
                font-weight: bold
                text-align: center;
                line-height: 40px;
                border: 2px solid #0000ff;
                border-radius: 3px;
                background-color: #fff;
                color: #0000ff;
                cursor: pointer;
                font-weight: bold;`;

const Setting = (props) => {
  return (
    <>
      <Router>
        <SettingCut>
          <SettingNavigation>
            <Link to="/setting/equipment" style={{ textDecoration: "none" }}>
              <SettingMenu>장비</SettingMenu>
            </Link>
            <Link to="/setting/damage" style={{ textDecoration: "none" }}>
              <SettingMenu>딜표</SettingMenu>
            </Link>
          </SettingNavigation>
        </SettingCut>
        <Switch>
          <Route path="/setting/equipment" component={Equipment} />
          <Route path="/setting/damage" component={DamageAndBuff} />
        </Switch>
        <FinishContainer>
          <FinishSettingButton onClick={() => props.history.push("/")}>
            완료
          </FinishSettingButton>
        </FinishContainer>
      </Router>
    </>
  );
};

export default Setting;
