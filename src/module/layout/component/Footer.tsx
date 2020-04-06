import React, { FC } from 'react';

export const Footer: FC = () => {
  return (
  <footer>
    <div id="footer_wrap">
      <div id="footer">
        <div className="PJ_foot_1">
          <div className="PJ_container">
            <div className="PJ_foot_menu">
              <ul>
                <li><a href="https://www.fitpetmall.com/service/agreement.php">이용약관</a></li>
                <li><a href="https://www.fitpetmall.com/service/private.php"><strong>개인정보처리방침</strong></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="PJ_foot_3">
          <div className="PJ_container">
            <div className="PJ_ft_info">
              <dl>
                <dt>상호</dt>
                <dd>주식회사 핏펫(Fitpet)</dd>
                <dt>주소</dt>
                <dd>서울특별시 강남구 테헤란로 420 (메이플타워 Mayple Tower) 13층</dd>
              </dl>
              <dl>
                <dt>대표</dt>
                <dd>고정욱</dd>
                <dt>사업자등록번호</dt>
                <dd>543-87-00755 <a href="https://www.fitpetmall.com/mypage/index.php#">사업자번호조회</a></dd>
                <dt>통신판매업신고번호</dt>
                <dd>2018-서울강남-01774</dd>
                <dt>개인정보관리자</dt>
                <dd>차경묵</dd>
              </dl>
              <dl>
                <dt>대표번호</dt>
                <dd>02-6339-1800</dd>
                <dt>팩스번호</dt>
                <dd>02-2030-9399</dd>
                <dt>메일</dt>
                <dd><a href="mailto:godo@godo.co.kr">contact@fitpet.co.kr</a></dd>
                <dt>호스팅제공</dt>
                <dd>엔에이치엔고도(주)</dd>
              </dl>
              <p className="copyright">COPYRIGHT (c) <strong>fitpetmall.com</strong> ALL RIGHTS RESERVED. DESIGNED BY <a href="http://8design.kr/">8DESIGN</a>.</p>
            </div>
            <div className="PJ_certify">
              <span></span>
              <span></span>
            </div>
            <div className="PJ_ft_cs">
              <h3>고객센터</h3>
              <strong>02-6339-1800</strong>
              <p>평일[공휴일 제외] 10:00~18:00<br/>점심시간 12:00~13:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}