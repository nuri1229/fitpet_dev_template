import React, { FC } from 'react';
import { Left } from './Left'
import {RouteContainer} from '../../../entires/routes';

interface MainProps {
  isDev: boolean;
}


export const Main: FC<MainProps> = ({ isDev }) => {
  return (
    <main>
      <div id="container">
        <div id="contents">
          <div className="sub_content" style={{display:'flex'}}>
            {isDev && <Left/>}
            <div className="content" style={{marginTop: '30px'}}>
              <RouteContainer/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}