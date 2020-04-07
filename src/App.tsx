import React from 'react';
import { HashRouter } from 'react-router-dom';
import { GlobalStyle } from './styles';
import { DeviceDetectContextProvider } from './entires/components';
import { Header, Main, Footer } from './module/layout/component';
import { Spinner } from './entires/components';
import { useSelector } from 'react-redux';
import { selRootStateIsPeding } from './entires/selector';

export const App: React.FC = () => {

  const isDev = process.env.NODE_ENV == 'development' ? true : false;
  const isPending: boolean = useSelector(selRootStateIsPeding);
  
  return (
    <HashRouter>
      {isPending && <Spinner/>}
      <GlobalStyle/>
      <DeviceDetectContextProvider>
        {isDev && <Header/>}
        <Main isDev={isDev}/>
        {isDev && <Footer/>}
      </DeviceDetectContextProvider>     
    </HashRouter>
  )
}