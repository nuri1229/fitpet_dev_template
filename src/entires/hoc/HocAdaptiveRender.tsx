import React, { FC } from 'react';
import { getDeviceType } from '../components/DeviceDetectContextProvider';

export interface HocAdaptiveRenderProps<T> {
  desktop: FC<T>;
  tablet?: FC<T>;
  mobile: FC<T>;
}

export function HocAdaptiveRender<T>(component: HocAdaptiveRenderProps<T>) {
  
  const componentGenerate: FC<T> = props => {

    let Comp: FC<T>;
    Comp = component.desktop;

    const deviceType =  getDeviceType();
    console.log('deviceType..', deviceType);
    if (deviceType === 'DESKTOP' && component.desktop) {
      Comp = component.desktop;
    } else if (deviceType === 'MOBILE' && component.mobile) {  
      Comp = component.mobile;
    } else {
      return null;
    }

    return <Comp {...props}></Comp>
  }

  return componentGenerate;
}