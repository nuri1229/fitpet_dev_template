import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles';
import { DeviceDetectContextProvider } from './entires/components';
import { Header, Main, Footer } from './module/layout/component';
import styled from 'styled-components';

export const App: React.FC = () => {

  const isDev = process.env.NODE_ENV == 'development' ? true : false;

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <DeviceDetectContextProvider>
        {isDev && <Header/>}
        <Main isDev={isDev}/>
        {isDev && <Footer/>}
      </DeviceDetectContextProvider>     
    </BrowserRouter>
  )
}