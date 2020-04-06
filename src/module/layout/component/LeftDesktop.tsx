import React, { FC } from 'react';
import '../style/layout.css';

export const LeftDesktop: FC = () => {
  return (
    <div className="side_cont">
      <div className="sub_menu_box">
        <h2 style={{fontSize:'18px',fontWeight:'bold'}}>마이페이지</h2>
        <ul className="sub_menu_mypage">
            <li>쇼핑정보
                <ul className="sub_depth1">
                    <li><a href="https://www.fitpetmall.com/mypage/order_list.php">- 주문목록/배송조회</a></li>
                    <li><a href="https://www.fitpetmall.com/mypage/cancel_list.php">- 취소/반품/교환 내역</a></li>
                    <li><a href="https://www.fitpetmall.com/mypage/refund_list.php">- 환불/입금 내역</a></li>
                    <li><a href="https://www.fitpetmall.com/mypage/wish_list.php">- 찜리스트</a></li>
                </ul>
            </li>
            <li>혜택관리
                <ul className="sub_depth1">
                    <li><a href="https://www.fitpetmall.com/mypage/coupon.php">- 쿠폰</a></li>
                    <li><a href="https://www.fitpetmall.com/mypage/mileage.php">- 적립금</a></li>
                </ul>
            </li>
            <li>고객센터
                <ul className="sub_depth1">
                    <li><a href="https://www.fitpetmall.com/mypage/mypage_qa.php">- 1:1 문의</a></li>
                </ul>
            </li>
            <li>회원정보
                <ul className="sub_depth1">
            <li><a href="https://www.fitpetmall.com/mypage/before_phone.php">- 본인인증</a></li>
                    <li><a href="https://www.fitpetmall.com/mypage/my_page_password.php">- 회원정보 변경</a></li>
                    <li><a href="https://www.fitpetmall.com/mypage/hack_out.php">- 회원 탈퇴</a></li>
                    <li><a href="https://www.fitpetmall.com/mypage/shipping.php">- 배송지 관리</a></li>
                </ul>
            </li>
            <li>나의 상품문의
                <ul className="sub_depth1">
                    <li><a href="https://www.fitpetmall.com/mypage/mypage_goods_qa.php">- 나의 상품문의</a></li>
                </ul>
            </li>
            <li>나의 상품후기
                <ul className="sub_depth1">
                    <li><a href="https://www.fitpetmall.com/mypage/mypage_goods_review.php">- 나의 상품후기</a></li>
                </ul>
            </li>
        </ul>
      </div>
    </div>
  )
}