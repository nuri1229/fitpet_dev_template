import React, { FC } from 'react';
import { HocAdaptiveRender } from '../../../entires/hoc';

type User = {
  userId: number;
  userName: string;
}

interface UsersListProps {
  items: User[];
}

export const UsersList:FC<UsersListProps> = ({items}) => {
  
  return (
  <>
  {items.map((item)=>(
    <p key = {item.userId}>{item.userName}</p>
  ))}
  </>
  )
}

export const UsersList2:FC<UsersListProps> = HocAdaptiveRender<UsersListProps>({
  desktop: UsersList,
  tablet: () => (<div>태블릿 입니다</div>),
  mobile: () => (<div>모바일 입니다</div>),
})