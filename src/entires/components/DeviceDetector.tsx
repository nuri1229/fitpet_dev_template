import React, { FC, useEffect, useState } from 'react';

const DESKTOP_MIN_WIDTH: number = 556;

export const getDeviceType = (): string => {
  
  const width = window.innerWidth;

  let deviceType: string = 'DESKTOP';

  if (width < DESKTOP_MIN_WIDTH) {
    deviceType = 'MOBILE';
  }

  return deviceType;

}

export const DeviceDetector: FC = ({children}) => {
  
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    
    function handleResize () {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
      
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
      

  }, [dimensions]);

  return (
    <>
      {children}
    </>
  )
}

