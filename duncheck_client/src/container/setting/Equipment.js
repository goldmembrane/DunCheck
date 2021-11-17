import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import styled from "styled-components";
import RestCut from "../Equipment/RestCut";
import Magic from "../Equipment/Magic";

let EquipmentBox = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #6e45e2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

let EquipmentNavigation = styled.ul`
  display: flex;
`;

let EquipmentMenu = styled.li`
  padding-top: 5px;
  padding-bottom: 5px;
  width: 200px;
  margin-right: 40px;
  background-color: #434343;
  color: #ffffff;
  text-align: center;
  list-style: none;
  font-size: 26px;
`;

const Equipment = () => {
  return (
    <>
      <Router>
        <EquipmentBox>
          <EquipmentNavigation>
            <Link
              to="/setting/equipment/magic"
              style={{ textDecoration: "none" }}
            >
              <EquipmentMenu>장비마부</EquipmentMenu>
            </Link>
            <Link
              to="/setting/equipment/avatar"
              style={{ textDecoration: "none" }}
            >
              <EquipmentMenu>나머지 설정</EquipmentMenu>
            </Link>
          </EquipmentNavigation>
        </EquipmentBox>
        <Switch>
          <Route exact path="/setting/equipment/magic" component={Magic} />
          <Route path="/setting/equipment/avatar" component={RestCut} />
          <Route component={Magic} />
        </Switch>
      </Router>
    </>
  );
};

export default Equipment;
