import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as BlockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
// import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { TextFundamentsMetaData } from './TextFundaments/router-data';
import { GoogleFontsMetaData } from './GoogleFonts/router-data';
import { CssAnimationsMetaData } from './CssAnimations/router-data';
import { ColorsMetaData } from './Colors/router-data';

export const blockRouterMetaData = [
  BlockRouterMetaData121220231,
  // SelectorsAndCascadeMetaData,
  TextFundamentsMetaData,
  GoogleFontsMetaData,
  CssAnimationsMetaData,
  ColorsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
