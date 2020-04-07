import { connect, ConnectedProps } from 'react-redux';
import React, { FC } from 'react';
import { AppState } from '../store';

export interface HocAdaptiveRender2Props<T> {
  desktop: FC<T>;
  tablet?: FC<T>;
  mobile: FC<T>;
}

const mapState = (state: AppState) => ({})