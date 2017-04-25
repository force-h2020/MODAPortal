import test from 'ava';
import { actionTest } from 'redux-ava';
import { TOGGLE_ADD_MODA, toggleAddModa } from '../AppActions';

test('should return the correct type for toggleAddModa', actionTest(toggleAddModa, null, { type: TOGGLE_ADD_MODA }));
