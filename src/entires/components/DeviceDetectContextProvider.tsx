import React, { FC, createContext, useEffect, useState} from 'react';
import _debounce from 'lodash/debounce';

const DESKTOP_MIN_WIDTH: number = 1025;

export const getDeviceType = (): string => {
  
  const width = window.innerWidth;

  let deviceType: string = 'DESKTOP';

  if (width < DESKTOP_MIN_WIDTH) {
    deviceType = 'MOBILE';
  }

  return deviceType;
}


export const DeviceDetectContextProvider: FC = ({children}) => {
  
  const [device, setDevice] = useState(getDeviceType());
  const DeviceContext = createContext(getDeviceType());

  useEffect(() => {
  
    const handleResize = _debounce(() => {
      setDevice(getDeviceType());
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
      
  }, [device]);

  return (
    <DeviceContext.Provider value={device}>
      {children}
    </DeviceContext.Provider>
  )
}

