import React, { FC } from 'react';

export const HeaderMobile: FC = () => {
  return (
    <header>
    <div id="header_wrap" style={{paddingTop: '0px',borderBottom: '0.1rem solid #dcdcdc'}}>
      <div className="header_box">
        <div className="PJ_head_2" style={{display: 'block'}}>
          <div className="top_banner_wrap">
            <ul className="top_banner_list" style={{background:'#32529d', height:'31px', lineHeight: '31px', fontWeight: 'bold', textAlign:'center'}}>
              <li>
                <a href="https://m.fitpetmall.com/event/join_event" style={{color:'white', fontSize:'10px'}}>지금 첫 구매시 수의사 추천 상품 100원!</a>
              </li>
            </ul>
         </div>
  
          <div className="h_logo" style={{height:'52px', textAlign:'center', padding:'13px 0', borderBottom: '1px solid #dcdcdc'}}>
              <a href="https://m.fitpetmall.com/main/index.php">
                <img style={{height:'25.67px'}} src="https://m.fitpetmall.com/data/skin/mobile/fitpetmall_live/img/banner/32e244da1becadd09eeabb348540b0fb_59729.png" alt="로고" title="로고"></img>
              </a> 
          </div>
        </div>
  
  
        <div id="main_top_menu">
          <ul>
            <li style={{height: '31px', lineHeight:'31px'}}>
              <a href="https://m.fitpetmall.com/goods/goods_main.php?sno=74" className="top_nav_3" style={{fontSize:'12px'}}>모바일 HEADER 메뉴바</a>
            </li> 
          </ul>
        </div>
      </div>
  </div>
  </header>
  )
}