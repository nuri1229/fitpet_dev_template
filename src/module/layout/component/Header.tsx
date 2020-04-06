import { HocAdaptiveRender } from '../../../entires/hoc';

import { HeaderMobile } from './HeaderMobile';
import { HeaderDesktop } from './HeaderDesktop';

export const Header = HocAdaptiveRender({
  desktop: HeaderDesktop,
  mobile: HeaderMobile
})

