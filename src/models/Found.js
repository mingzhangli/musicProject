import { banner, detailHot } from '@/services/api'

export default {
    namespace: 'found',
    state: {
        listBanner: [],
        hotSong: []
    },
    reducers: {
        setStateVal(state, { payload, callback }) {
            if (callback) callback();
            return {
                ...state,
                ...payload,
            };
        },
    },
    effects: {
        *getHotSong({ payload }, { put, call }) {
            const res = yield call(detailHot)
            if (res) {
                yield put({
                    type: 'setStateVal',
                    payload: {
                        hotSong: res.data.data
                    }
                })
            }

        },
        *getBanner({ payload }, { put, call }) {
            const res = yield call(banner);
            if (res) {
                yield put({
                    type: 'setStateVal',
                    payload: {
                        listBanner: res.data.banners
                    }
                })
            }
        },
    },

};
