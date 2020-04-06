import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selSampleStateItems } from '../selector';
import { ACT_REQUEST_PENDING } from '../../../entires/action';
import { ACT_SAMPLE_SUCCESS, ACT_SAMPLE_ERROR } from '../action';
import { Result } from '../model';
import { getSampleList } from '../service';

export const SamplePage:FC = () => {

  const dispatch = useDispatch();
  const items: Result[] = useSelector(selSampleStateItems);

  useEffect(() => {

    dispatch({
      type: ACT_REQUEST_PENDING,
      payload: {
        callService: getSampleList,
        successAction: ACT_SAMPLE_SUCCESS,
        errorAction: ACT_SAMPLE_ERROR
      }
    })

  }, [dispatch])

  console.log('items', items);

  return (
    <>
    렝스: {items.length}
    </>
  )
}