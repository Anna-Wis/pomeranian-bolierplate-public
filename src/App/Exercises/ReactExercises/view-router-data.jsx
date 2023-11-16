import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnClickMetaData } from './ReactOnClick/router-data';
import { ReactOnChangeMetaData } from './ReactOnChange/router-data';
import { ReactIfStatementsMetaData } from './ReactIfStatements/router-data';
import { ReactGuessNumberMetaData } from './ReactGuessNumber/router-data';
import { HitTheMolMetaData } from './HitTheMol/router-data';
import { ToDoWithServerMetaData } from './ToDoWithServer/router-data';
import { BasicFormsMetaData } from './BasicForms/router-data';
import { BasicFormsReactHookMetaData } from './ReactHookBasicForms/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickMetaData,
  ReactOnChangeMetaData,
  ReactIfStatementsMetaData,
  ReactGuessNumberMetaData,
  HitTheMolMetaData,
  ToDoWithServerMetaData,
  BasicFormsMetaData,
  BasicFormsReactHookMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
