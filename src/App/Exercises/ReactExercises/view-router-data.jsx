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
import { FirebaseRouterMetaData } from './Firebase/router-data';
import { CounterReduxRouterMetaData } from './CounterRedux/router-data';
import { ReduxRTKRouterMetaData } from './PokemonRTK/router-data';

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
  FirebaseRouterMetaData,
  CounterReduxRouterMetaData,
  ReduxRTKRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
