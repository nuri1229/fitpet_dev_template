import React, { FC } from 'react';
import styled from 'styled-components';

export const RootPage: FC = () => {
  
  const Button = styled.button`
    color:white;
    background:red;
  `

  return (
    <h1>루트 페이지<Button>sss</Button></h1>
  )
}