import React, { FC, useEffect } from 'react';
import { getUserList } from '../service';
import { useDispatch, useSelector } from 'react-redux';
import { ACT_REQUEST_PENDING } from '../../../entires/action';
import { ACT_USERS_SUCCESS, ACT_USERS_ERROR } from '../action/users.actions';
import { selUsersItems } from '../selector';
import { User } from '../model';


export const UsersPage: FC = () => {

  const dispatch = useDispatch();
  const items:User[] = useSelector(selUsersItems);

  useEffect(() => {
    console.log('UsersPage.render');
    dispatch({
      type: ACT_REQUEST_PENDING,
      payload: {
        callService: getUserList,
        successAction: ACT_USERS_SUCCESS,
        errorAction: ACT_USERS_ERROR
      }
    })


  }, [dispatch])


  return (
    <>
      {items.map((item, index) => (
        <img key={index} src={item.picture.large} alt={item.name.title}></img>
      ))}
    </>
  )


}