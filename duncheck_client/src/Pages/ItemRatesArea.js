import React from "react"
import { Text } from "../Components/Text"
import { Button } from "../Components/Button"
import './css/ItemRatesArea.css'

const ItemRatesArea = () => {
    return (
        <>
            {/* 현재 페이지의 정보를 보여주는 타이틀 박스*/}
            <div className="check-item-rates-title-box">
                <Text content = "경매장 시세 확인" style = "check-item-rates-title"/>
            </div>

            {/* 시세를 알고 싶은 아이템을 검색하기 위한 검색 박스*/}
            <div className="search-item-rates-bar-box">
                <div className="search-item-rates-bar">
                    <Text content = "Search Item!" />
                </div>
                <Button content = "검색" style = "search-item-button"/>
            </div>

            {/* 위에 검색 박스와 그래프를 구분 짓는 구분선 영역*/}
            <div></div>

            {/* 현재 검색한 아이템의 시세 변화를 그래프로 보여주는 박스*/}
            <div className="item-rates-changing-graph-box">

                <div className="item-rates-changing-graph-title-box">
                    <Text content = "무결점 골드 베릴" style = "item-rates-changing-graph-title"/>
                </div>

                <div className="item-rates-changing-graph-content">
                    <Text content = "무결점 골드 베릴 가격 변화 그래프" />
                </div>
            </div>
        </>
    )
}

export default ItemRatesArea