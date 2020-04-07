import React, { FC, createContext, useEffect, useState, useContext} from 'react';
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

type ContextType = {
  device: string,
  setContextData: (device: string) => void
}

const defaultValue: ContextType = {
  device: getDeviceType(),
  setContextData: (device: string) => {}
}

export const DeviceContext = createContext(defaultValue);

export const DeviceDetectContextProvider: FC = ({children}) => {
  
  const context = useContext(DeviceContext);
  const [device, setDevice] = useState(context.device);

  const contextData:ContextType = {
    device: device,
    setContextData: (device) => {
      setDevice(device)
    }
  }

  useEffect(() => {
  
    const handleResize = _debounce(() => {
      contextData.setContextData(getDeviceType());
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
      
  }, [device]);

  return (
    <DeviceContext.Provider value={contextData}>
      {children}
    </DeviceContext.Provider>
  )
}




// export class DeviceDetectContextProvider extends React.Component {
  
//   state = {
//     deviceType: getDeviceType(),
//     setDeviceType: (deviceType):void => {

//       this.setState({
//         ...this.state,
//         deviceType
//       });

//     }
//   }

//   componentDidMount() {

//     const handleResize = _debounce(() => {
//       this.state.setDeviceType(getDeviceType());
//     }, 100);

//     window.addEventListener('resize', handleResize);
//   }

//   //언마운트 추가..

//   render () {
//     return (
//       <DeviceContext.Provider value={this.state}>
//         {this.props.children}
//       </DeviceContext.Provider>
//     )  
//   }

// }




