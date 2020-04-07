import React, { FC } from 'react';
import styled from 'styled-components';

export const Spinner: FC = () => {

  const Spinner = styled.div`
    width: ${window.innerWidth}px;
    height: ${window.innerHeight}px;
    opacity: 0.5;
    background: black;
    position:fixed;
    z-index: 99;
  `

  return (
    <Spinner>스피너 입니다.</Spinner>
  )
}