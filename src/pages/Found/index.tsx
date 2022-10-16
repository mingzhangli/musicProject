import React, { FC, useEffect, useRef, useState } from 'react'
import { NavBar, SearchBar, Toast, Swiper } from 'antd-mobile'
import { SearchBarRef } from 'antd-mobile/es/components/search-bar'
import { UnorderedListOutline } from 'antd-mobile-icons'
import './index.less'
import { connect } from 'dva';
import { history } from 'umi'

const Found: FC = ({ dispatch, found }) => {
    const searchRef = useRef<SearchBarRef>(null)
    const [state, setState] = useState([])

    const items = found.listBanner.map((item, index) => (
        <Swiper.Item key={index}>
            <div className='swiper'>
                <img src={item.pic} />
            </div>
        </Swiper.Item>
    ))

    useEffect(() => {
        dispatch({
            type: 'found/getBanner'
        })
    }, [])

    const goSearch = () => {
        history.push('/searchBar')
    }

    return <>
        <div className="nav">
            <NavBar
                left={<UnorderedListOutline />}
                backArrow={false}
            >
                <SearchBar
                    ref={searchRef}
                    placeholder='请输入内容'
                    onFocus={goSearch}
                />
            </NavBar>
            <Swiper autoplay>{items}</Swiper>
        </div>
    </>
}

export default connect(({ found }) => ({
    found
}))(Found);