import { HocAdaptiveRender } from '../../../entires/hoc';
import { LeftMobile } from './LeftMobile';
import { LeftDesktop } from './LeftDesktop';

export const Left = HocAdaptiveRender({
  desktop: LeftDesktop,
  mobile: LeftMobile
})