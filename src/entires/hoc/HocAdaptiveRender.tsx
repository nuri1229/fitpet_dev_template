import React, { FC, useContext } from 'react';
import { getDeviceType } from '../components/DeviceDetectContextProvider';
import { DeviceContext } from '../components/DeviceDetectContextProvider';

export interface HocAdaptiveRenderProps<T> {
  desktop: FC<T>;
  tablet?: FC<T>;
  mobile: FC<T>;
}

export function HocAdaptiveRender<T>(component: HocAdaptiveRenderProps<T>) {

  const componentGenerate: FC<T> = props => {

    const context = useContext(DeviceContext);
    const deviceType = context.device;

    let Comp: FC<T>;
    Comp = component.desktop;

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

