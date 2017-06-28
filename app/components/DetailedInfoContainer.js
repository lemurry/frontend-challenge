import React from 'react';
import {Container} from 'flux/utils';
import Immutable from 'immutable';

import DetailedInfoStore from '../data/DetailedInfoStore.js';
import ActionCreator from '../data/ActionCreator.js';

import DetailedInfo from './DetailedInfo.js';

function getStores() {
  return [DetailedInfoStore];
}

function getState() {
  let store = DetailedInfoStore.getState().toJS();

  return {
    store: store,

    onOpen: ActionCreator.openEmployee,
    onClose: ActionCreator.closeEmployee
  };
}
export default Container.createFunctional(DetailedInfo, getStores, getState);
