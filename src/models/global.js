import _ from 'lodash';
import { getUsers } from '../services/g';

export default {
    namespace: 'test_models',

    state: {
        Data:[],
    },

    effects: {
        *fetch({ payload, callback }, { put, call }){
            const response = yield call(getUsers, payload);
            yield put({
                type: 'save',
                payload: response,
            });
        },
    },

    reducers: {
        save(state, {payload} ) {
            return {
              ...state,
              Data: payload,
            };
        },

        clear() {
            return {
                Data:[],
            }
        },
    },
};
