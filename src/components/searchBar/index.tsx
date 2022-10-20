import React, { useEffect, useRef, useState } from 'react'
import { NavBar, SearchBar } from 'antd-mobile'
import { connect, useDispatch } from 'dva'
import './index.less'
import { history } from 'umi'
import { DeleteOutline, RedoOutline } from 'antd-mobile-icons'

export default connect(({ found }) => ({
    searchDetail: found.hotSong
}))(function searchBar(props) {
    const searchRef = useRef<SearchBarRef>(null)
    const dispatch = useDispatch()
    const [searchHistory, setSearchHistory] = useState<[]>(['爱很美', '苦茶', '苦茶子', '海阔天空', '爱很美', '苦茶', '苦茶子', '海阔天空'])

    const [searchRecommend, setSearchRecommend] = useState<[]>(['爱美很', '苦茶', '演员', '光辉岁月'])
    const { searchDetail } = props


    useEffect(() => {
        dispatch({
            type: 'found/getHotSong'
        })
    }, [])


    const delHis = () => {
        if (searchHistory.length > 0) {
            let temp = searchHistory
            temp.shift()
            setSearchHistory([...temp])

        }
    }

    const searchContent = (val: unknown, num = 20) => {
        history.push({
            pathname: '/songList',
            query: {
                keywords: val?.target?.value,
            }
        })
    }

    const back = () => {
        history.goBack()
    }
    return (
        <div className='content' >
            <NavBar
                style={{
                    '--height': '36px',
                    '--border-bottom': '1px #eee solid',
                }}
                right='搜索'
                onBack={back}
            >
                <SearchBar
                    ref={searchRef}
                    placeholder='请输入内容'
                    onBlur={searchContent}
                />
            </NavBar>
            <div className="history">
                <p>历史</p>
                <p ><DeleteOutline onClick={delHis} /></p>
            </div>
            <div className="historyBar">
                {
                    searchHistory.map((item, index) => {
                        return <li key={index}>
                            {item}
                        </li>
                    })
                }
            </div>
            <div className="recommend">
                <p>推荐</p>
                <p ><RedoOutline /></p>
            </div>
            <div className="recommendBar">
                {
                    searchRecommend.map((item, index) => {
                        return <li key={index}>
                            {item}
                        </li>
                    })
                }
            </div>
            <div className="topic">
                <div className="singer">
                    <div className="singerTitle">歌手榜</div>
                    {
                        searchDetail.map((item, index) => {
                            return <li className='hot' key={index}>
                                <span className='searchTopic'> {item.searchWord}</span>
                                <img src={item.iconUrl} />
                            </li>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
)