import Item from 'antd-mobile/es/components/dropdown/item'
import React, { useEffect } from 'react'
import { connect, useDispatch } from 'umi'

import styles from './index.less'


export default connect(({ found }) => ({
    searchAlbum: found.searchAlbum
}))(function Album(props) {

    const { searchAlbum, keywords } = props
    const dispatch = useDispatch()

    console.log(searchAlbum, 'zhuanji')

    useEffect(() => {
        dispatch({
            type: 'found/getSearchAlbum',
            payload: {
                keywords: keywords,
                type: 10
            }
        })
    }, [])
    return <div className={styles.content}>
        {
            searchAlbum.map((item, index) => {
                return <div className={styles.list} key={index}>
                    <div className={styles.leftAlbum}>
                        <img src={item.blurPicUrl} />
                    </div>
                    <div className={styles.rightAlbum}>
                        <div className={styles.albumName}>{item.name}</div>
                        <div className={styles.anther}>{item.artist.name}</div>
                    </div>
                </div>
            })
        }
    </div>
})
