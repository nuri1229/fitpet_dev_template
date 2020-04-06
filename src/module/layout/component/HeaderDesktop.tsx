import React, { FC } from 'react';
import '../style/PJ_basic.css';

export const HeaderDesktop: FC = () => {
  return (
  <header>
  <div id="header">
    <div className="PJ_head_1">
      <div className="PJ_container">
        <div className="PJ_login">
          <ul className="PJ_login_ul">
            <li><a href="!#">로그아웃</a></li>
  
            <li><a href="!#">장바구니<strong>1</strong></a></li>
  
            <li><a href="!#">고객센터</a></li>
            <li><a href="!#">공지사항</a></li>
            <li className="PJ_mypage">
              <div className="top_mypage_cont">
                <span className="top_mypage_tit"><a href="https://www.fitpetmall.com/mypage/index.php">마이페이지</a></span>
              </div>
            </li>
  
            <li className="PJ_icon_search"><a href="!#" title="검색"><i className="fa fa-search"></i></a></li>
          </ul>
        </div>
      </div>
    </div> 
    <div className="PJ_head_2">
        <div className="PJ_container">
          <div className="PJ_logo">
            <a href="!#">
              <img src="https://www.fitpetmall.com/data/skin/front/fitpetmall_live/img/banner/71651a408387d08480ac7d0d059ee5c8_38483.png" alt="핏펫몰 로고" title="핏펫몰 로고"></img>
            </a>
          </div>
      </div>
    </div>  
    <div className="PJ_head_3">
        <div className="PJ_container">
          <ul className="depth0 gnb_menu0">
            <li><a href="!#">건강검진</a></li>
            <li><a href="!#">사료</a></li>
            <li><a href="!#">영양제</a></li>
            <li><a href="!#">간식</a></li>
            <li><a href="!#">그루밍</a></li>
            <li><a href="!#">위생</a></li>
            <li><a href="!#">행동용품</a></li>
          </ul>
          <ul className="depth0 gnb_menu0">
            <li><a href="!#">100원이벤트</a></li>
            <li><a href="!#">대용량존</a></li>
            <li><a href="!#">고양이</a></li>
          </ul>
      </div>
    </div>
  </div>
  </header>
  )
}