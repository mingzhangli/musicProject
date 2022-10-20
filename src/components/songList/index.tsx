import React, { useEffect, useRef } from 'react'
import { connect, useDispatch } from 'dva'
import { Tabs } from 'antd-mobile'
import { history } from 'umi'
import { searchList } from '@/services/api'

import Album from '../album/index'
import PlayList from '../playList'
import Radio from '../radio'
import MV from '../MV'
import './index.less'


export default connect(({ found }) => ({
    searchList: found.searchList
}))(function SongList(props) {
    const {
        location: {
            query: { keywords, limit }
        }
    } = props

    const { searchList } = props

    console.log(searchList)
    const searchRef = useRef<SearchBarRef>(null)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: 'found/getSearchList',
            payload: {
                keywords: keywords
            }
        })
    }, [])


    const back = () => {
        history.goBack()
    }

    const searchContent = (val: unknown, num = 20) => {
        history.push({
            pathname: '/songList',
            query: {
                keywords: val?.target?.value,
            }
        })
    }

    return <div>
        <div className="content">
            <Tabs>
                <Tabs.Tab title='单曲' key='single'>
                    <div className="list">
                        {
                            searchList.map((item, index) => {
                                return <div className='listName' key={index}>
                                    <div className='left'>{index + 1}.</div>
                                    <div className='right'>
                                        <div className="songName">{item.name}</div>
                                        <div className="artist">{item.ar[0].name}</div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </Tabs.Tab>
                <Tabs.Tab title='专辑' key='album'>
                    <Album keywords={keywords} />
                </Tabs.Tab>
                <Tabs.Tab title='歌单' key='playList'>
                    <PlayList keywords={keywords} />
                </Tabs.Tab>
                <Tabs.Tab title='电台' key='radio'>
                    <Radio keywords={keywords} />
                </Tabs.Tab>
                <Tabs.Tab title='MV' key='MV'>
                    <MV keywords={keywords} />
                </Tabs.Tab>
            </Tabs>

        </div>
    </div>
})
