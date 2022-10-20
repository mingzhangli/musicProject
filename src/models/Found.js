import { banner, detailHot, searchList } from '@/services/api'

export default {
    namespace: 'found',
    state: {
        listBanner: [],
        hotSong: [],
        searchList: [],
        searchAlbum: [],
        playList: [],
        radioList: [],
        mvList: []
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
                        hotSong: res?.data?.data || []
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
                        listBanner: res?.data?.banners || []
                    }
                })
            }
        },
        *getSearchList({ payload }, { put, call }) {
            const res = yield call(searchList, payload)
            if (res) {
                yield put({
                    type: 'setStateVal',
                    payload: {
                        searchList: res?.data?.result?.songs || []
                    }
                })
            }
        },
        *getSearchAlbum({ payload }, { put, call }) {
            const res = yield call(searchList, payload)
            if (res) {
                yield put({
                    type: 'setStateVal',
                    payload: {
                        searchAlbum: res?.data?.result?.albums || []
                    }
                })
            }
        },
        *getPlayList({ payload }, { put, call }) {
            const res = yield call(searchList, payload)
            if (res) {
                yield put({
                    type: 'setStateVal',
                    payload: {
                        playList: res?.data?.result?.playlists || [],

                    }
                })
            }
        },
        *getRadioList({ payload }, { put, call }) {
            const res = yield call(searchList, payload)
            console.log(res.data.result.djRaputdios, 'lddd')
            yield put({
                type: 'setStateVal',
                payload: {
                    radioList: res?.data?.result?.djRadios || []
                }
            })
        },
        *getMvList({ payload }, { put, call }) {
            const res = yield call(searchList, payload)
            yield put({
                type: 'setStateVal',
                payload: {
                    mvList: res?.data?.result?.mvs || []
                }
            })
        },
    }
}
