import test from 'ava';
import { reducerTest } from 'redux-ava';
import appReducer, { getShowAddModa } from '../AppReducer';
import { toggleAddModa } from '../AppActions';

test('action for TOGGLE_ADD_MODA is working', reducerTest(
  appReducer,
  { showAddModa: false },
  toggleAddModa(),
  { showAddModa: true },
));

test('getShowAddModa selector', t => {
  t.is(getShowAddModa({
    app: { showAddModa: false },
  }), false);
});
